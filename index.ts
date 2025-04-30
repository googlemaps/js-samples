/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// マップインスタンスを保持する変数 (エラー処理などでアクセスするため)
let map: google.maps.Map | null = null;
// マーカーインスタンスを保持する変数（必要に応じて）
let marker: google.maps.Marker | google.maps.marker.AdvancedMarkerElement | null = null;

function initMap(): void {
  const mapElement = document.getElementById("map") as HTMLElement;
  // デフォルトの位置（エラー発生時やGeolocation非対応時に使用）
  const defaultPosition = { lat: 35.717, lng: 139.731 }; // 元のコードの座標
  let currentPos = defaultPosition;

  // Geolocation APIに対応しているか確認
  if (navigator.geolocation) {
    console.log("Geolocationに対応しています。現在地を取得します...");
    navigator.geolocation.getCurrentPosition(
      // --- 取得成功時のコールバック ---
      (position) => {
        currentPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log("現在地を取得しました:", currentPos);

        // 地図の中心を現在地に設定して地図を表示
        map = new google.maps.Map(mapElement, {
          center: currentPos,
          zoom: 15, // 現在地なので少し詳細なズームレベルに
          // mapId: "YOUR_MAP_ID" // 必要に応じてMapIDを指定
        });

        // --- マーカーを立てる ---
        // ※注意: AdvancedMarkerElementを使う場合は、
        // Maps APIのscriptタグで &libraries=marker を追加してください。
        // 例: <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=marker"></script>

        // AdvancedMarkerElementが利用可能かチェック (libraries=markerを指定した場合)
        if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
           marker = new google.maps.marker.AdvancedMarkerElement({
             map: map,
             position: currentPos,
             title: "あなたの現在地",
           });
        } else {
          // AdvancedMarkerElementが利用できない場合 (旧Markerを使用)
          marker = new google.maps.Marker({
             position: currentPos,
             map: map,
             title: "あなたの現在地",
          });
        }
        // --- マーカー設定ここまで ---

      },
      // --- 取得失敗時のコールバック ---
      (error) => {
        console.error("Geolocation エラー:", error);
        let message = "位置情報の取得エラー";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = "エラー: 位置情報の利用が許可されていません。";
            break;
          case error.POSITION_UNAVAILABLE:
            message = "エラー: 現在位置を取得できませんでした。";
            break;
          case error.TIMEOUT:
            message = "エラー: 位置情報の取得がタイムアウトしました。";
            break;
          default:
             message = "エラー: 不明なエラーが発生しました。";
             break;
        }
        alert(message + "\nデフォルトの位置を表示します。");
        // エラーが発生した場合、デフォルト位置で地図を表示
        displayMapWithError(mapElement, defaultPosition, message);
      }
    );
  } else {
    // Geolocation APIに対応していない場合
    console.warn("お使いのブラウザはGeolocationをサポートしていません。");
    alert("エラー: お使いのブラウザはGeolocationをサポートしていません。\nデフォルトの位置を表示します。");
    // デフォルト位置で地図を表示
    displayMapWithError(mapElement, defaultPosition, "Geolocation非対応");
  }
}

// エラー時に地図を表示するための補助関数
function displayMapWithError(mapElement: HTMLElement, position: {lat: number, lng: number}, errorMessage: string): void {
  map = new google.maps.Map(mapElement, {
    center: position,
    zoom: 8, // 広域表示
  });
  // (オプション) エラーメッセージを示すマーカーなどを表示しても良い
  // marker = new google.maps.Marker({
  //   position: position,
  //   map: map,
  //   title: errorMessage,
  // });
}


// declare global と window.initMap は、<script>タグのcallbackで
// グローバルスコープのinitMapを呼ぶために必要です。
declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

// TypeScriptのモジュールとして扱われるようにするためのおまじない
export {};