/**
 * The markers array.
 * @type {Object}
 */
var markers = {
  'countries': [
    {
      'name': 'Australia',
      'location': [-25.274398, 133.775136]
    },
    {
      'name': 'La Svizra',
      'location': [46.818188, 8.227512]
    },
    {
      'name': 'España',
      'location': [40.463667, -3.74922]
    },
    {
      'name': 'France',
      'location': [46.227638, 2.213749]
    },
    {
      'name': 'Ireland',
      'location': [53.41291, -8.24389]
    },
    {
      'name': 'Italia',
      'location': [41.87194, 12.56738]
    },
    {
      'name': 'United Kingdom',
      'location': [55.378051, -3.435973]
    },
    {
      'name': 'United States of America',
      'location': [37.09024, -95.712891]
    },
    {
      'name': 'Singapore',
      'location': [1.352083, 103.819836]
    }
  ],
  'places': [
    {
      'name': 'Alcatraz',
      'location': [37.8266636, -122.4230122]
    },
    {
      'name': 'Baker beach',
      'location': [37.794191, -122.4832446]
    },
    {
      'name': 'Basel',
      'location': [47.5596145, 7.5806107]
    },
    {
      'name': 'Bern',
      'location': [46.9479986, 7.4481481]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.5, 150.25]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.8922238, 151.2776486]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.8745629, 151.1993164]
    },
    {
      'name': 'Genève',
      'location': [46.2038099, 6.1399589]
    },
    {
      'name': 'Luzern',
      'location': [47.045546, 8.308017]
    },
    {
      'name': 'Catoira',
      'location': [42.666645, -8.7225115]
    },
    {
      'name': 'Chinese Gardens of Friendship',
      'location': [-33.876439, 151.202479]
    },
    {
      'name': 'Edinburgh',
      'location': [55.9501755, -3.1875359]
    },
    {
      'name': 'Financial District',
      'location': [40.7051157, -74.0088305]
    },
    {
      'name': 'Gijón',
      'location': [43.5452608, -5.6619264]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.8195864, -122.4785325]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.768481, -122.472897]
    },
    {
      'name': 'Katoomba',
      'location': [-33.714043, 150.311589]
    },
    {
      'name': 'Kerry',
      'location': [52.0614133, -9.5264371]
    },
    {
      'name': 'Lincoln Park',
      'location': [42.2505943, -83.1785361]
    },
    {
      'name': 'London',
      'location': [51.5001524, -0.1262362]
    },
    {
      'name': 'Madrid',
      'location': [40.4166909, -3.7003454]
    },
    {
      'name': 'Manly',
      'location': [-33.797144, 151.28804]
    },
    {
      'name': 'Market Street',
      'location': [37.7735258, -122.4212331]
    },
    {
      'name': 'Mountain View',
      'location': [37.3860517, -122.0838511]
    },
    {
      'name': 'Paris',
      'location': [48.8566667, 2.3509871]
    },
    {
      'name': 'Pier 39',
      'location': [37.8093576, -122.4100923]
    },
    {
      'name': 'Pobra do Caramiñal',
      'location': [42.6032973, -8.9389431]
    },
    {
      'name': 'Ribadeo',
      'location': [43.5373554, -7.0430294]
    },
    {
      'name': 'Roma',
      'location': [41.8954656, 12.4823243]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.8636619, 151.2168012]
    },
    {
      'name': 'San Francisco',
      'location': [37.7749295, -122.4194155]
    },
    {
      'name': 'Santa Uxía de Ribeira',
      'location': [42.553609, -8.9897779]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.8804471, -8.5463034]
    },
    {
      'name': 'Singapore',
      'location': [1.022500, 103.033056]
    },
    {
      'name': 'SoMa',
      'location': [37.7774052, -122.4099154]
    },
    {
      'name': 'Sydney',
      'location': [-33.867139, 151.207114]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.839014, 151.244891]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.8013407, -122.4056674]
    },
    {
      'name': 'The Domain',
      'location': [-33.8677263, 151.2164369]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.7981953, -122.3968842]
    },
    {
      'name': 'Aquarium of the Bay',
      'location': [37.808142, -122.409552]
    },
    {
      'name': 'Asian Art Museum',
      'location': [37.779365, -122.416706]
    },
    {
      'name': 'Banyoles',
      'location': [42.133283, 2.759772]
    },
    {
      'name': 'Barcelona',
      'location': [41.387917, 2.1699187]
    },
    {
      'name': 'Bay beach',
      'location': [37.805173, -122.460503]
    },
    {
      'name': 'Belfast',
      'location': [54.5972686, -5.9301088]
    },
    {
      'name': 'Besalú',
      'location': [42.2003846, 2.6986627]
    },
    {
      'name': 'Bishops Rd',
      'location': [55.150239, -6.879328]
    },
    {
      'name': 'Castro',
      'location': [37.7601533, -122.4311526]
    },
    {
      'name': 'Castros de Baroña',
      'location': [42.694578, -9.030558]
    },
    {
      'name': 'Chinatown',
      'location': [37.794722, -122.407222]
    },
    {
      'name': 'Civic Center',
      'location': [37.7826958, -122.4198266]
    },
    {
      'name': 'Corcubión',
      'location': [42.9446417, -9.1943102]
    },
    {
      'name': 'A Coruña',
      'location': [43.3708731, -8.395835]
    },
    {
      'name': 'Costa da Morte',
      'location': [42.694578, -9.030558]
    },
    {
      'name': 'Derry',
      'location': [54.9945099, -7.3199955]
    },
    {
      'name': 'Dolmen de Axeitos',
      'location': [42.600300, -9.017519]
    },
    {
      'name': 'Downhill Demesne',
      'location': [55.167808, -6.829758]
    },
    {
      'name': 'Downtown',
      'location': [37.7749295, -122.4194155]
    },
    {
      'name': 'Dunas de Corrubedo',
      'location': [42.5764694, -9.0751438]
    },
    {
      'name': 'Dunluce Castle',
      'location': [55.211483, -6.579056]
    },
    {
      'name': 'Faro de Corrubedo',
      'location': [42.5764694, -9.0751438]
    },
    {
      'name': 'Featherdale Wildlife Park',
      'location': [-33.725650, 150.369089]
    },
    {
      'name': 'Fisterra',
      'location': [42.9050668, -9.2643379]
    },
    {
      'name': 'Gijón',
      'location': [43.5452608, -5.6619264]
    },
    {
      'name': 'Girona',
      'location': [41.9817957, 2.8236999]
    },
    {
      'name': 'Glasgow',
      'location': [55.8656274, -4.2572227]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.76904, -122.4835193]
    },
    {
      'name': 'La Torre de Dalt',
      'location': [42.082383, 2.773575]
    },
    {
      'name': 'Lough Neagh',
      'location': [54.5933462, -6.4162003]
    },
    {
      'name': 'Mosteiro de San Estevo',
      'location': [42.417058, -7.685950]
    },
    {
      'name': 'Monte Ciudad',
      'location': [42.559911, -9.015939]
    },
    {
      'name': 'Monterey',
      'location': [36.6002378, -121.8946761]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.163678, -6.810819]
    },
    {
      'name': 'Muxía',
      'location': [43.112681, -9.219111]
    },
    {
      'name': 'Parramata River',
      'location': [-33.822451, 151.078764]
    },
    {
      'name': 'Praia das Catedrais',
      'location': [43.555081, -7.133947]
    },
    {
      'name': 'Pontevedra',
      'location': [42.4336191, -8.648053]
    },
    {
      'name': 'Portrush',
      'location': [55.1991046, -6.6540672]
    },
    {
      'name': 'A Pobra do Caramiñal',
      'location': [42.6032973, -8.9389431]
    },
    {
      'name': 'Santa Uxía de Ribeira',
      'location': [42.553609, -8.9897779]
    },
    {
      'name': 'San Clodio',
      'location': [42.367342, -8.115275]
    },
    {
      'name': 'San Pedro',
      'location': [43.379039, -8.437306]
    },
    {
      'name': 'San Roque',
      'location': [42.561906, -9.018542]
    },
    {
      'name': 'Santa Cruz',
      'location': [36.9741171, -122.0307963]
    },
    {
      'name': 'Cañons do Sil',
      'location': [42.387319, -7.505250]
    },
    {
      'name': 'Smugglers Inn',
      'location': [55.234247, -6.510433]
    },
    {
      'name': 'Sunnyvale',
      'location': [37.36883, -122.0363496]
    },
    {
      'name': 'Tarragona',
      'location': [41.1186629, 1.24533]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.38569, -8.406633]
    },
    {
      'name': 'Vigo',
      'location': [42.2313564, -8.7124471]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.844806, 151.282368]
    },
    {
      'name': 'Winchester',
      'location': [37.318339, -121.951006]
    }
  ],
  'locations': [
    {
      'name': 'Sydney',
      'location': [-33.936293, 151.165388]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891813, 151.273160]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891727, 151.282489]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891717, 151.282478]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891711, 151.282317]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891690, 151.282457]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891685, 151.282317]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891674, 151.282263]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891647, 151.282215]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891636, 151.282231]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891577, 151.282210]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891572, 151.282221]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891529, 151.282247]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891518, 151.282242]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891513, 151.282253]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891486, 151.282280]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891465, 151.282242]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891432, 151.282178]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891304, 151.282263]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891266, 151.282301]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891212, 151.282280]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891202, 151.282269]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891175, 151.282462]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891127, 151.282274]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891116, 151.282253]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.891111, 151.282467]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890547, 151.277816]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890461, 151.282086]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890440, 151.277945]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890408, 151.278074]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890392, 151.278138]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890381, 151.278203]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890317, 151.281588]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890306, 151.281475]
    },
    {
      'name': 'Bondi beach',
      'location': [-33.890247, 151.281234]
    },
    {
      'name': 'Sydney',
      'location': [-33.880625, 151.202902]
    },
    {
      'name': 'Sydney',
      'location': [-33.880444, 151.203824]
    },
    {
      'name': 'Sydney',
      'location': [-33.880357, 151.204352]
    },
    {
      'name': 'Sydney',
      'location': [-33.878254, 151.203991]
    },
    {
      'name': 'Sydney',
      'location': [-33.877795, 151.203959]
    },
    {
      'name': 'Sydney',
      'location': [-33.877552, 151.203977]
    },
    {
      'name': 'Chinese Gardens of Friendship',
      'location': [-33.876439, 151.202479]
    },
    {
      'name': 'Sydney',
      'location': [-33.876236, 151.205424]
    },
    {
      'name': 'Sydney',
      'location': [-33.875697, 151.210953]
    },
    {
      'name': 'Sydney',
      'location': [-33.875453, 151.211012]
    },
    {
      'name': 'Sydney',
      'location': [-33.875373, 151.211016]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.875171, 151.201221]
    },
    {
      'name': 'Sydney',
      'location': [-33.874480, 151.211167]
    },
    {
      'name': 'Sydney',
      'location': [-33.873887, 151.205771]
    },
    {
      'name': 'Sydney',
      'location': [-33.873851, 151.205814]
    },
    {
      'name': 'Sydney',
      'location': [-33.873767, 151.205776]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.873495, 151.200051]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.873412, 151.200309]
    },
    {
      'name': 'Sydney',
      'location': [-33.873295, 151.206758]
    },
    {
      'name': 'Sydney',
      'location': [-33.873286, 151.207074]
    },
    {
      'name': 'Sydney',
      'location': [-33.872819, 151.206907]
    },
    {
      'name': 'Sydney',
      'location': [-33.872762, 151.207298]
    },
    {
      'name': 'Sydney',
      'location': [-33.872163, 151.206628]
    },
    {
      'name': 'Sydney',
      'location': [-33.871911, 151.206685]
    },
    {
      'name': 'Sydney',
      'location': [-33.871757, 151.207078]
    },
    {
      'name': 'Sydney',
      'location': [-33.871639, 151.206648]
    },
    {
      'name': 'Sydney',
      'location': [-33.871367, 151.211773]
    },
    {
      'name': 'Sydney',
      'location': [-33.871067, 151.206625]
    },
    {
      'name': 'Sydney',
      'location': [-33.871044, 151.211889]
    },
    {
      'name': 'Sydney',
      'location': [-33.870872, 151.211874]
    },
    {
      'name': 'Sydney',
      'location': [-33.870783, 151.211761]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.870596, 151.200288]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.870461, 151.200327]
    },
    {
      'name': 'Sydney',
      'location': [-33.870289, 151.207719]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.870285, 151.199300]
    },
    {
      'name': 'Sydney',
      'location': [-33.870035, 151.207816]
    },
    {
      'name': 'Sydney',
      'location': [-33.869784, 151.212705]
    },
    {
      'name': 'Sydney',
      'location': [-33.869575, 151.212499]
    },
    {
      'name': 'The Domain',
      'location': [-33.869544, 151.214850]
    },
    {
      'name': 'Sydney',
      'location': [-33.869464, 151.212102]
    },
    {
      'name': 'Sydney',
      'location': [-33.869448, 151.212893]
    },
    {
      'name': 'Sydney',
      'location': [-33.869292, 151.260881]
    },
    {
      'name': 'Sydney',
      'location': [-33.868717, 151.260842]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.868419, 151.198606]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.868352, 151.198251]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.868128, 151.198240]
    },
    {
      'name': 'Sydney',
      'location': [-33.868053, 151.212747]
    },
    {
      'name': 'Sydney',
      'location': [-33.867956, 151.212912]
    },
    {
      'name': 'Sydney',
      'location': [-33.867863, 151.212399]
    },
    {
      'name': 'Sydney',
      'location': [-33.867277, 151.212493]
    },
    {
      'name': 'Sydney',
      'location': [-33.866865, 151.199990]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.866829, 151.196126]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.866828, 151.196125]
    },
    {
      'name': 'Sydney',
      'location': [-33.866776, 151.196014]
    },
    {
      'name': 'Sydney',
      'location': [-33.866606, 151.245392]
    },
    {
      'name': 'Sydney',
      'location': [-33.866378, 151.212645]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.866054, 151.215218]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.865994, 151.214926]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.865831, 151.216383]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.865827, 151.215154]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.865619, 151.216274]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864916, 151.213478]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864884, 151.215930]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864883, 151.215935]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864741, 151.218408]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864725, 151.216841]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864676, 151.217657]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864654, 151.217847]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864617, 151.215921]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864614, 151.217012]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864583, 151.218947]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864559, 151.214191]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864552, 151.219019]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864507, 151.217288]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.864470, 151.215748]
    },
    {
      'name': 'Sydney',
      'location': [-33.864442, 151.247164]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.863935, 151.217092]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.863931, 151.217172]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.863913, 151.217220]
    },
    {
      'name': 'Sydney',
      'location': [-33.863744, 151.249428]
    },
    {
      'name': 'Sydney',
      'location': [-33.863633, 151.249814]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.863609, 151.217132]
    },
    {
      'name': 'Darling Harbour',
      'location': [-33.863603, 151.197159]
    },
    {
      'name': 'Sydney',
      'location': [-33.863542, 151.250075]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.863389, 151.218190]
    },
    {
      'name': 'Royal Botanic Gardens',
      'location': [-33.863376, 151.218161]
    },
    {
      'name': 'The Domain',
      'location': [-33.862962, 151.222186]
    },
    {
      'name': 'The Domain',
      'location': [-33.862526, 151.222814]
    },
    {
      'name': 'Sydney',
      'location': [-33.860719, 151.234000]
    },
    {
      'name': 'Sydney',
      'location': [-33.860381, 151.217208]
    },
    {
      'name': 'Sydney',
      'location': [-33.860345, 151.221277]
    },
    {
      'name': 'The Domain',
      'location': [-33.860328, 151.221190]
    },
    {
      'name': 'Sydney',
      'location': [-33.860228, 151.233442]
    },
    {
      'name': 'The Domain',
      'location': [-33.859549, 151.221782]
    },
    {
      'name': 'Sydney',
      'location': [-33.859319, 151.208657]
    },
    {
      'name': 'The Domain',
      'location': [-33.859303, 151.221678]
    },
    {
      'name': 'The Domain',
      'location': [-33.859191, 151.221820]
    },
    {
      'name': 'Sydney',
      'location': [-33.858369, 151.230592]
    },
    {
      'name': 'Sydney',
      'location': [-33.858355, 151.215456]
    },
    {
      'name': 'Sydney',
      'location': [-33.858253, 151.231828]
    },
    {
      'name': 'Sydney',
      'location': [-33.858228, 151.230969]
    },
    {
      'name': 'Sydney',
      'location': [-33.858125, 151.230267]
    },
    {
      'name': 'Sydney',
      'location': [-33.858047, 151.229881]
    },
    {
      'name': 'Sydney',
      'location': [-33.858042, 151.229900]
    },
    {
      'name': 'Sydney',
      'location': [-33.857903, 151.229583]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.857846, 151.212494]
    },
    {
      'name': 'Sydney',
      'location': [-33.857661, 151.235731]
    },
    {
      'name': 'Sydney',
      'location': [-33.857377, 151.215628]
    },
    {
      'name': 'Sydney',
      'location': [-33.857346, 151.214976]
    },
    {
      'name': 'Sydney',
      'location': [-33.857325, 151.228869]
    },
    {
      'name': 'Sydney',
      'location': [-33.857319, 151.240397]
    },
    {
      'name': 'Sydney',
      'location': [-33.857257, 151.215609]
    },
    {
      'name': 'Sydney',
      'location': [-33.857216, 151.214601]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.857186, 151.212676]
    },
    {
      'name': 'Sydney',
      'location': [-33.857044, 151.246203]
    },
    {
      'name': 'Sydney',
      'location': [-33.857033, 151.227683]
    },
    {
      'name': 'Sydney',
      'location': [-33.856874, 151.214962]
    },
    {
      'name': 'Sydney',
      'location': [-33.856778, 151.238128]
    },
    {
      'name': 'Sydney',
      'location': [-33.856635, 151.215923]
    },
    {
      'name': 'Sydney',
      'location': [-33.856311, 151.226375]
    },
    {
      'name': 'Sydney',
      'location': [-33.856306, 151.231892]
    },
    {
      'name': 'Sydney',
      'location': [-33.856272, 151.230275]
    },
    {
      'name': 'Sydney',
      'location': [-33.856256, 151.226817]
    },
    {
      'name': 'Sydney',
      'location': [-33.856253, 151.226667]
    },
    {
      'name': 'Sydney',
      'location': [-33.856233, 151.229031]
    },
    {
      'name': 'Sydney',
      'location': [-33.856199, 151.215407]
    },
    {
      'name': 'Sydney',
      'location': [-33.856165, 151.215094]
    },
    {
      'name': 'Sydney',
      'location': [-33.856106, 151.225739]
    },
    {
      'name': 'Sydney',
      'location': [-33.856067, 151.197673]
    },
    {
      'name': 'Sydney',
      'location': [-33.856008, 151.222164]
    },
    {
      'name': 'Sydney',
      'location': [-33.855920, 151.210132]
    },
    {
      'name': 'Sydney',
      'location': [-33.855908, 151.221431]
    },
    {
      'name': 'Sydney',
      'location': [-33.855906, 151.221431]
    },
    {
      'name': 'Sydney',
      'location': [-33.855903, 151.210083]
    },
    {
      'name': 'Sydney',
      'location': [-33.855881, 151.211956]
    },
    {
      'name': 'Sydney',
      'location': [-33.855844, 151.212092]
    },
    {
      'name': 'Sydney',
      'location': [-33.855813, 151.208615]
    },
    {
      'name': 'Sydney',
      'location': [-33.855807, 151.208626]
    },
    {
      'name': 'Sydney',
      'location': [-33.855786, 151.208562]
    },
    {
      'name': 'Sydney',
      'location': [-33.855760, 151.210365]
    },
    {
      'name': 'Sydney',
      'location': [-33.855725, 151.223708]
    },
    {
      'name': 'Sydney',
      'location': [-33.855703, 151.248342]
    },
    {
      'name': 'Sydney',
      'location': [-33.855661, 151.248478]
    },
    {
      'name': 'Sydney',
      'location': [-33.855283, 151.210502]
    },
    {
      'name': 'Sydney',
      'location': [-33.855192, 151.210439]
    },
    {
      'name': 'Sydney',
      'location': [-33.855125, 151.250058]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.855121, 151.214280]
    },
    {
      'name': 'Sydney',
      'location': [-33.855028, 151.250311]
    },
    {
      'name': 'Sydney',
      'location': [-33.854993, 151.210300]
    },
    {
      'name': 'Sydney',
      'location': [-33.854981, 151.250433]
    },
    {
      'name': 'Sydney',
      'location': [-33.854846, 151.210211]
    },
    {
      'name': 'Sydney',
      'location': [-33.854842, 151.250806]
    },
    {
      'name': 'Sydney',
      'location': [-33.854743, 151.210236]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.854702, 151.216694]
    },
    {
      'name': 'Sydney',
      'location': [-33.854700, 151.251186]
    },
    {
      'name': 'Sydney',
      'location': [-33.854669, 151.220353]
    },
    {
      'name': 'Sydney',
      'location': [-33.854606, 151.251428]
    },
    {
      'name': 'Sydney',
      'location': [-33.854567, 151.214819]
    },
    {
      'name': 'Sydney',
      'location': [-33.854565, 151.208878]
    },
    {
      'name': 'Sydney',
      'location': [-33.854508, 151.251675]
    },
    {
      'name': 'Sydney',
      'location': [-33.854458, 151.251797]
    },
    {
      'name': 'Sydney',
      'location': [-33.854353, 151.252050]
    },
    {
      'name': 'Sydney',
      'location': [-33.854320, 151.208728]
    },
    {
      'name': 'Sydney',
      'location': [-33.854239, 151.216264]
    },
    {
      'name': 'Sydney',
      'location': [-33.854233, 151.214506]
    },
    {
      'name': 'Sydney',
      'location': [-33.854222, 151.215983]
    },
    {
      'name': 'Sydney',
      'location': [-33.854180, 151.209479]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.854026, 151.218883]
    },
    {
      'name': 'Sydney',
      'location': [-33.853928, 151.252881]
    },
    {
      'name': 'Sydney',
      'location': [-33.853909, 151.209077]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.853822, 151.219478]
    },
    {
      'name': 'Sydney',
      'location': [-33.853806, 151.209999]
    },
    {
      'name': 'Sydney',
      'location': [-33.853678, 151.210064]
    },
    {
      'name': 'Sydney',
      'location': [-33.853582, 151.208665]
    },
    {
      'name': 'Sydney',
      'location': [-33.853490, 151.210235]
    },
    {
      'name': 'Sydney',
      'location': [-33.853372, 151.210273]
    },
    {
      'name': 'Sydney',
      'location': [-33.853366, 151.210284]
    },
    {
      'name': 'Sydney',
      'location': [-33.853318, 151.210294]
    },
    {
      'name': 'Sydney',
      'location': [-33.853125, 151.210337]
    },
    {
      'name': 'Sydney',
      'location': [-33.853109, 151.210396]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.853050, 151.222134]
    },
    {
      'name': 'Sydney',
      'location': [-33.852980, 151.210493]
    },
    {
      'name': 'Sydney',
      'location': [-33.852873, 151.210541]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.852755, 151.223952]
    },
    {
      'name': 'Sydney',
      'location': [-33.852621, 151.210632]
    },
    {
      'name': 'Sydney',
      'location': [-33.852476, 151.210724]
    },
    {
      'name': 'Sydney',
      'location': [-33.852356, 151.255294]
    },
    {
      'name': 'Sydney',
      'location': [-33.851999, 151.211137]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.851907, 151.229156]
    },
    {
      'name': 'Sydney',
      'location': [-33.851897, 151.203638]
    },
    {
      'name': 'Sydney',
      'location': [-33.851720, 151.211276]
    },
    {
      'name': 'Sydney',
      'location': [-33.851639, 151.211341]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.851607, 151.231173]
    },
    {
      'name': 'Sydney',
      'location': [-33.851575, 151.211373]
    },
    {
      'name': 'Sydney',
      'location': [-33.851408, 151.211351]
    },
    {
      'name': 'Sydney',
      'location': [-33.851392, 151.211351]
    },
    {
      'name': 'Sydney',
      'location': [-33.851360, 151.211383]
    },
    {
      'name': 'Sydney',
      'location': [-33.851355, 151.211383]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.851146, 151.234198]
    },
    {
      'name': 'Sydney',
      'location': [-33.851103, 151.211802]
    },
    {
      'name': 'Sydney',
      'location': [-33.851049, 151.211802]
    },
    {
      'name': 'Sydney',
      'location': [-33.850881, 151.211978]
    },
    {
      'name': 'Sydney',
      'location': [-33.850877, 151.212006]
    },
    {
      'name': 'Sydney',
      'location': [-33.850867, 151.212746]
    },
    {
      'name': 'Sydney',
      'location': [-33.850858, 151.212017]
    },
    {
      'name': 'Sydney',
      'location': [-33.850834, 151.211979]
    },
    {
      'name': 'Sydney',
      'location': [-33.850829, 151.211823]
    },
    {
      'name': 'Sydney',
      'location': [-33.850824, 151.212762]
    },
    {
      'name': 'Sydney',
      'location': [-33.850781, 151.211904]
    },
    {
      'name': 'Sydney',
      'location': [-33.850765, 151.212070]
    },
    {
      'name': 'Sydney',
      'location': [-33.850754, 151.211823]
    },
    {
      'name': 'Sydney',
      'location': [-33.850727, 151.211813]
    },
    {
      'name': 'Sydney',
      'location': [-33.850722, 151.211931]
    },
    {
      'name': 'Sydney',
      'location': [-33.850719, 151.211944]
    },
    {
      'name': 'Sydney',
      'location': [-33.850692, 151.211944]
    },
    {
      'name': 'Sydney',
      'location': [-33.850661, 151.211944]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.850491, 151.236140]
    },
    {
      'name': 'Sydney',
      'location': [-33.850490, 151.207844]
    },
    {
      'name': 'Sydney',
      'location': [-33.850486, 151.212751]
    },
    {
      'name': 'Sydney',
      'location': [-33.850448, 151.212762]
    },
    {
      'name': 'Sydney',
      'location': [-33.850419, 151.257672]
    },
    {
      'name': 'Sydney',
      'location': [-33.850309, 151.212092]
    },
    {
      'name': 'Sydney',
      'location': [-33.849729, 151.212424]
    },
    {
      'name': 'Sydney',
      'location': [-33.849496, 151.210563]
    },
    {
      'name': 'Sydney',
      'location': [-33.849394, 151.259142]
    },
    {
      'name': 'Sydney',
      'location': [-33.849377, 151.210767]
    },
    {
      'name': 'Sydney',
      'location': [-33.849365, 151.210836]
    },
    {
      'name': 'Sydney',
      'location': [-33.849306, 151.210767]
    },
    {
      'name': 'Sydney',
      'location': [-33.847942, 151.262414]
    },
    {
      'name': 'Sydney',
      'location': [-33.847647, 151.263314]
    },
    {
      'name': 'Sydney',
      'location': [-33.847608, 151.263444]
    },
    {
      'name': 'Sydney',
      'location': [-33.847389, 151.264103]
    },
    {
      'name': 'Sydney',
      'location': [-33.847315, 151.212751]
    },
    {
      'name': 'Sydney',
      'location': [-33.846933, 151.265256]
    },
    {
      'name': 'Sydney',
      'location': [-33.846767, 151.265633]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.846564, 151.239112]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.846430, 151.239273]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.846398, 151.239305]
    },
    {
      'name': 'Sydney',
      'location': [-33.846300, 151.266619]
    },
    {
      'name': 'Sydney',
      'location': [-33.845994, 151.267206]
    },
    {
      'name': 'Sydney',
      'location': [-33.845656, 151.270444]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844767, 151.241800]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844735, 151.241285]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844714, 151.241537]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844687, 151.241499]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844622, 151.242588]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844435, 151.240957]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844306, 151.240845]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844285, 151.242282]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844188, 151.241703]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844166, 151.243844]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844161, 151.243844]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844150, 151.241708]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844145, 151.243479]
    },
    {
      'name': 'Sydney',
      'location': [-33.844139, 151.259844]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844129, 151.243430]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844102, 151.241918]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844091, 151.243398]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844059, 151.243355]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.844022, 151.243334]
    },
    {
      'name': 'Sydney',
      'location': [-33.843967, 151.277997]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843957, 151.240636]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843898, 151.242674]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843892, 151.278578]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843866, 151.240700]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843839, 151.242502]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843823, 151.242223]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843812, 151.242293]
    },
    {
      'name': 'Sydney',
      'location': [-33.843769, 151.279358]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843727, 151.240201]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843703, 151.284728]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843700, 151.284722]
    },
    {
      'name': 'Sydney',
      'location': [-33.843692, 151.280928]
    },
    {
      'name': 'Sydney',
      'location': [-33.843625, 151.280844]
    },
    {
      'name': 'Sydney',
      'location': [-33.843617, 151.280928]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843600, 151.280675]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843598, 151.240904]
    },
    {
      'name': 'Sydney',
      'location': [-33.843567, 151.281039]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843550, 151.283567]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843528, 151.240137]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843517, 151.284450]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843512, 151.241000]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843507, 151.243312]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843496, 151.243162]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843489, 151.283775]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843474, 151.241043]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843472, 151.283978]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843469, 151.243189]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843458, 151.242781]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843448, 151.241714]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843419, 151.281303]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843414, 151.281306]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843408, 151.281389]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843406, 151.281281]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843405, 151.240008]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843399, 151.240684]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843394, 151.284222]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843389, 151.241129]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843386, 151.284383]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843383, 151.241263]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843367, 151.241891]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843356, 151.241167]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843351, 151.241859]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843350, 151.281664]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843346, 151.241242]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843340, 151.241242]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843335, 151.243607]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843324, 151.240625]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843314, 151.241204]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843303, 151.241204]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843212, 151.243001]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843196, 151.239885]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843174, 151.240587]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843158, 151.240587]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843153, 151.242765]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843137, 151.242755]
    },
    {
      'name': 'Watsons Bay',
      'location': [-33.843131, 151.281608]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843120, 151.240979]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843115, 151.240566]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843104, 151.240925]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.843072, 151.240850]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842986, 151.242197]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842981, 151.243457]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842976, 151.243650]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842933, 151.243441]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842906, 151.243409]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842884, 151.239557]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842879, 151.239649]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842809, 151.239563]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842799, 151.239509]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842788, 151.239450]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842782, 151.239413]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842772, 151.239429]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842750, 151.240689]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842740, 151.243634]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842713, 151.239273]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842707, 151.240705]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842702, 151.240705]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842686, 151.241360]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842681, 151.241253]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842648, 151.241322]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842627, 151.241306]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842584, 151.239354]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842439, 151.240453]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842428, 151.240501]
    },
    {
      'name': 'Taroonga Zoo',
      'location': [-33.842139, 151.241703]
    },
    {
      'name': 'Sydney',
      'location': [-33.842053, 151.261947]
    },
    {
      'name': 'Sydney',
      'location': [-33.837475, 151.266544]
    },
    {
      'name': 'Sydney',
      'location': [-33.837064, 151.266897]
    },
    {
      'name': 'Sydney',
      'location': [-33.836506, 151.267375]
    },
    {
      'name': 'Sydney',
      'location': [-33.833731, 151.269989]
    },
    {
      'name': 'Sydney',
      'location': [-33.828953, 151.274989]
    },
    {
      'name': 'Sydney',
      'location': [-33.828786, 151.275122]
    },
    {
      'name': 'Sydney',
      'location': [-33.828533, 151.275331]
    },
    {
      'name': 'Sydney',
      'location': [-33.827025, 151.276286]
    },
    {
      'name': 'Sydney',
      'location': [-33.823569, 151.276961]
    },
    {
      'name': 'Parramata River',
      'location': [-33.822451, 151.078764]
    },
    {
      'name': 'Parramata River',
      'location': [-33.822450, 151.078764]
    },
    {
      'name': 'Sydney',
      'location': [-33.822358, 151.277081]
    },
    {
      'name': 'Parramata River',
      'location': [-33.821603, 151.082158]
    },
    {
      'name': 'Sydney',
      'location': [-33.820861, 151.277231]
    },
    {
      'name': 'Sydney',
      'location': [-33.816544, 151.277858]
    },
    {
      'name': 'Sydney',
      'location': [-33.814522, 151.278239]
    },
    {
      'name': 'Manly',
      'location': [-33.813542, 151.261069]
    },
    {
      'name': 'Manly',
      'location': [-33.813492, 151.261261]
    },
    {
      'name': 'Manly',
      'location': [-33.813414, 151.262508]
    },
    {
      'name': 'Sydney',
      'location': [-33.813400, 151.278431]
    },
    {
      'name': 'Manly',
      'location': [-33.812433, 151.265283]
    },
    {
      'name': 'Manly',
      'location': [-33.812208, 151.266067]
    },
    {
      'name': 'Manly',
      'location': [-33.811944, 151.259461]
    },
    {
      'name': 'Manly',
      'location': [-33.811503, 151.258342]
    },
    {
      'name': 'Manly',
      'location': [-33.811436, 151.258208]
    },
    {
      'name': 'Manly',
      'location': [-33.811431, 151.258203]
    },
    {
      'name': 'Manly',
      'location': [-33.811356, 151.257817]
    },
    {
      'name': 'Manly',
      'location': [-33.811286, 151.256847]
    },
    {
      'name': 'Manly',
      'location': [-33.811194, 151.256506]
    },
    {
      'name': 'Manly',
      'location': [-33.810911, 151.266989]
    },
    {
      'name': 'Manly',
      'location': [-33.810886, 151.255828]
    },
    {
      'name': 'Manly',
      'location': [-33.810878, 151.255792]
    },
    {
      'name': 'Manly',
      'location': [-33.810864, 151.255744]
    },
    {
      'name': 'Manly',
      'location': [-33.810719, 151.267075]
    },
    {
      'name': 'Manly',
      'location': [-33.810683, 151.273628]
    },
    {
      'name': 'Manly',
      'location': [-33.810678, 151.273636]
    },
    {
      'name': 'Manly',
      'location': [-33.810564, 151.254581]
    },
    {
      'name': 'Manly',
      'location': [-33.810547, 151.254678]
    },
    {
      'name': 'Manly',
      'location': [-33.810253, 151.273350]
    },
    {
      'name': 'Manly',
      'location': [-33.810092, 151.267547]
    },
    {
      'name': 'Manly',
      'location': [-33.809600, 151.271647]
    },
    {
      'name': 'Manly',
      'location': [-33.809592, 151.271633]
    },
    {
      'name': 'Manly',
      'location': [-33.809289, 151.270769]
    },
    {
      'name': 'Manly',
      'location': [-33.809081, 151.270267]
    },
    {
      'name': 'Manly',
      'location': [-33.809042, 151.270022]
    },
    {
      'name': 'Manly',
      'location': [-33.808625, 151.269881]
    },
    {
      'name': 'Manly',
      'location': [-33.807917, 151.269011]
    },
    {
      'name': 'Manly',
      'location': [-33.807903, 151.269100]
    },
    {
      'name': 'Manly',
      'location': [-33.807869, 151.269050]
    },
    {
      'name': 'Manly',
      'location': [-33.807858, 151.269053]
    },
    {
      'name': 'Manly',
      'location': [-33.806919, 151.273542]
    },
    {
      'name': 'Manly',
      'location': [-33.806917, 151.273544]
    },
    {
      'name': 'Manly',
      'location': [-33.806306, 151.272733]
    },
    {
      'name': 'Manly',
      'location': [-33.805806, 151.253083]
    },
    {
      'name': 'Manly',
      'location': [-33.805728, 151.253122]
    },
    {
      'name': 'Manly',
      'location': [-33.804633, 151.270828]
    },
    {
      'name': 'Manly',
      'location': [-33.803233, 151.252608]
    },
    {
      'name': 'Manly',
      'location': [-33.803169, 151.252950]
    },
    {
      'name': 'Manly',
      'location': [-33.803150, 151.252931]
    },
    {
      'name': 'Manly',
      'location': [-33.802997, 151.250067]
    },
    {
      'name': 'Manly',
      'location': [-33.802864, 151.250486]
    },
    {
      'name': 'Manly',
      'location': [-33.802861, 151.252950]
    },
    {
      'name': 'Manly',
      'location': [-33.802856, 151.250494]
    },
    {
      'name': 'Manly',
      'location': [-33.802506, 151.252733]
    },
    {
      'name': 'Manly',
      'location': [-33.802333, 151.250089]
    },
    {
      'name': 'Manly',
      'location': [-33.802011, 151.250292]
    },
    {
      'name': 'Manly',
      'location': [-33.801597, 151.247931]
    },
    {
      'name': 'Manly',
      'location': [-33.801569, 151.248831]
    },
    {
      'name': 'Manly',
      'location': [-33.801517, 151.247433]
    },
    {
      'name': 'Manly',
      'location': [-33.801503, 151.247367]
    },
    {
      'name': 'Manly',
      'location': [-33.801478, 151.248942]
    },
    {
      'name': 'Manly',
      'location': [-33.801439, 151.248942]
    },
    {
      'name': 'Manly',
      'location': [-33.801264, 151.249158]
    },
    {
      'name': 'Manly',
      'location': [-33.801078, 151.249300]
    },
    {
      'name': 'Manly',
      'location': [-33.801064, 151.249306]
    },
    {
      'name': 'Manly',
      'location': [-33.801058, 151.249308]
    },
    {
      'name': 'Manly',
      'location': [-33.800936, 151.249400]
    },
    {
      'name': 'Manly',
      'location': [-33.800933, 151.249400]
    },
    {
      'name': 'Manly',
      'location': [-33.800922, 151.249403]
    },
    {
      'name': 'Manly',
      'location': [-33.800919, 151.249403]
    },
    {
      'name': 'Manly',
      'location': [-33.800892, 151.250367]
    },
    {
      'name': 'Manly',
      'location': [-33.800428, 151.249844]
    },
    {
      'name': 'Manly',
      'location': [-33.800417, 151.249853]
    },
    {
      'name': 'Manly',
      'location': [-33.800394, 151.250011]
    },
    {
      'name': 'Manly',
      'location': [-33.800386, 151.249872]
    },
    {
      'name': 'Manly',
      'location': [-33.800342, 151.249856]
    },
    {
      'name': 'Manly',
      'location': [-33.800339, 151.249858]
    },
    {
      'name': 'Manly',
      'location': [-33.800336, 151.249858]
    },
    {
      'name': 'Manly',
      'location': [-33.800331, 151.249864]
    },
    {
      'name': 'Manly',
      'location': [-33.800122, 151.250525]
    },
    {
      'name': 'Manly',
      'location': [-33.800119, 151.250544]
    },
    {
      'name': 'Manly',
      'location': [-33.800008, 151.250833]
    },
    {
      'name': 'Manly',
      'location': [-33.799983, 151.250850]
    },
    {
      'name': 'Manly',
      'location': [-33.799417, 151.284353]
    },
    {
      'name': 'Manly',
      'location': [-33.798722, 151.282744]
    },
    {
      'name': 'Manly',
      'location': [-33.797128, 151.287986]
    },
    {
      'name': 'Manly',
      'location': [-33.797114, 151.288000]
    },
    {
      'name': 'Manly',
      'location': [-33.797011, 151.288436]
    },
    {
      'name': 'Manly',
      'location': [-33.797008, 151.288433]
    },
    {
      'name': 'Manly',
      'location': [-33.796775, 151.287906]
    },
    {
      'name': 'Manly',
      'location': [-33.796167, 151.287983]
    },
    {
      'name': 'Manly',
      'location': [-33.796142, 151.287628]
    },
    {
      'name': 'Manly',
      'location': [-33.796042, 151.287939]
    },
    {
      'name': 'Manly',
      'location': [-33.794128, 151.287608]
    },
    {
      'name': 'Manly',
      'location': [-33.794111, 151.287944]
    },
    {
      'name': 'Manly',
      'location': [-33.794106, 151.287939]
    },
    {
      'name': 'Manly',
      'location': [-33.794103, 151.287939]
    },
    {
      'name': 'Manly',
      'location': [-33.794092, 151.287925]
    },
    {
      'name': 'Manly',
      'location': [-33.794089, 151.287922]
    },
    {
      'name': 'Manly',
      'location': [-33.794050, 151.287878]
    },
    {
      'name': 'Manly',
      'location': [-33.794044, 151.287869]
    },
    {
      'name': 'Manly',
      'location': [-33.794036, 151.287897]
    },
    {
      'name': 'Manly',
      'location': [-33.794033, 151.287950]
    },
    {
      'name': 'Manly',
      'location': [-33.794028, 151.287950]
    },
    {
      'name': 'Manly',
      'location': [-33.794025, 151.287953]
    },
    {
      'name': 'Manly',
      'location': [-33.794022, 151.287889]
    },
    {
      'name': 'Manly',
      'location': [-33.794019, 151.287906]
    },
    {
      'name': 'Manly',
      'location': [-33.794017, 151.287922]
    },
    {
      'name': 'Manly',
      'location': [-33.794014, 151.287964]
    },
    {
      'name': 'Manly',
      'location': [-33.794011, 151.287947]
    },
    {
      'name': 'Manly',
      'location': [-33.794008, 151.287964]
    },
    {
      'name': 'Manly',
      'location': [-33.794006, 151.287953]
    },
    {
      'name': 'Manly',
      'location': [-33.794003, 151.287969]
    },
    {
      'name': 'Manly',
      'location': [-33.794000, 151.287950]
    },
    {
      'name': 'Manly',
      'location': [-33.793994, 151.287950]
    },
    {
      'name': 'Manly',
      'location': [-33.793992, 151.287897]
    },
    {
      'name': 'Manly',
      'location': [-33.793989, 151.287917]
    },
    {
      'name': 'Manly',
      'location': [-33.793986, 151.287939]
    },
    {
      'name': 'Manly',
      'location': [-33.793967, 151.287956]
    },
    {
      'name': 'Manly',
      'location': [-33.793964, 151.288025]
    },
    {
      'name': 'Manly',
      'location': [-33.793961, 151.288025]
    },
    {
      'name': 'Manly',
      'location': [-33.793958, 151.288025]
    },
    {
      'name': 'Manly',
      'location': [-33.793956, 151.288028]
    },
    {
      'name': 'Manly',
      'location': [-33.793953, 151.288028]
    },
    {
      'name': 'Manly',
      'location': [-33.793950, 151.288028]
    },
    {
      'name': 'Manly',
      'location': [-33.793947, 151.287950]
    },
    {
      'name': 'Manly',
      'location': [-33.793944, 151.287950]
    },
    {
      'name': 'Manly',
      'location': [-33.793936, 151.287950]
    },
    {
      'name': 'Manly',
      'location': [-33.793775, 151.287458]
    },
    {
      'name': 'Manly',
      'location': [-33.793761, 151.287444]
    },
    {
      'name': 'Manly',
      'location': [-33.793694, 151.287458]
    },
    {
      'name': 'Manly',
      'location': [-33.793683, 151.287453]
    },
    {
      'name': 'Manly',
      'location': [-33.793667, 151.287311]
    },
    {
      'name': 'Manly',
      'location': [-33.793664, 151.287447]
    },
    {
      'name': 'Manly',
      'location': [-33.793378, 151.287431]
    },
    {
      'name': 'Manly',
      'location': [-33.793353, 151.287850]
    },
    {
      'name': 'Manly',
      'location': [-33.793311, 151.287819]
    },
    {
      'name': 'Manly',
      'location': [-33.793306, 151.287400]
    },
    {
      'name': 'Manly',
      'location': [-33.793156, 151.287747]
    },
    {
      'name': 'Manly',
      'location': [-33.793136, 151.287717]
    },
    {
      'name': 'Manly',
      'location': [-33.793131, 151.287358]
    },
    {
      'name': 'Manly',
      'location': [-33.793106, 151.287661]
    },
    {
      'name': 'Manly',
      'location': [-33.793014, 151.287392]
    },
    {
      'name': 'Manly',
      'location': [-33.792958, 151.287406]
    },
    {
      'name': 'Manly',
      'location': [-33.791767, 151.287267]
    },
    {
      'name': 'Manly',
      'location': [-33.791439, 151.287231]
    },
    {
      'name': 'Katoomba',
      'location': [-33.734786, 150.314889]
    },
    {
      'name': 'Katoomba',
      'location': [-33.734767, 150.314881]
    },
    {
      'name': 'Katoomba',
      'location': [-33.734764, 150.314878]
    },
    {
      'name': 'Katoomba',
      'location': [-33.734761, 150.314875]
    },
    {
      'name': 'Katoomba',
      'location': [-33.734639, 150.314783]
    },
    {
      'name': 'Katoomba',
      'location': [-33.734633, 150.314786]
    },
    {
      'name': 'Katoomba',
      'location': [-33.734611, 150.314794]
    },
    {
      'name': 'Katoomba',
      'location': [-33.734578, 150.314803]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.733347, 150.300467]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.733344, 150.300467]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.733328, 150.300475]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.733322, 150.300481]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.733306, 150.300497]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.733106, 150.301033]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.732958, 150.300447]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.732886, 150.300531]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.732856, 150.300553]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732839, 150.312022]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732836, 150.312022]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732833, 150.312019]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732831, 150.312017]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732828, 150.312017]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732822, 150.312011]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732819, 150.312008]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732772, 150.312019]
    },
    {
      'name': 'Katoomba',
      'location': [-33.732625, 150.312036]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.732503, 150.300606]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.732494, 150.300606]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.732483, 150.300606]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.732478, 150.300606]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.732442, 150.300597]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.731564, 150.300992]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.731536, 150.301019]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.731239, 150.301186]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.731206, 150.301203]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.731061, 150.301803]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.731033, 150.301803]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.731019, 150.301803]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.731003, 150.301783]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730578, 150.310050]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730336, 150.308903]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730333, 150.308903]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730331, 150.308903]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730328, 150.308903]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730325, 150.308903]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730311, 150.308900]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730272, 150.316061]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730256, 150.308706]
    },
    {
      'name': 'Katoomba',
      'location': [-33.730228, 150.308681]
    },
    {
      'name': 'Katoomba',
      'location': [-33.729708, 150.307494]
    },
    {
      'name': 'Katoomba',
      'location': [-33.729656, 150.307328]
    },
    {
      'name': 'Katoomba',
      'location': [-33.729478, 150.306517]
    },
    {
      'name': 'Katoomba',
      'location': [-33.729314, 150.306692]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.729069, 150.301347]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.728664, 150.300958]
    },
    {
      'name': 'Katoomba',
      'location': [-33.728519, 150.305347]
    },
    {
      'name': 'Katoomba',
      'location': [-33.728433, 150.305339]
    },
    {
      'name': 'Katoomba',
      'location': [-33.728411, 150.305339]
    },
    {
      'name': 'Katoomba',
      'location': [-33.728272, 150.305297]
    },
    {
      'name': 'Katoomba',
      'location': [-33.727486, 150.304475]
    },
    {
      'name': 'Katoomba',
      'location': [-33.727472, 150.304492]
    },
    {
      'name': 'Katoomba',
      'location': [-33.727469, 150.304486]
    },
    {
      'name': 'Katoomba',
      'location': [-33.727467, 150.304478]
    },
    {
      'name': 'Katoomba',
      'location': [-33.727464, 150.304469]
    },
    {
      'name': 'Katoomba',
      'location': [-33.727228, 150.304247]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726594, 150.317969]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726575, 150.318192]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726572, 150.318189]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726569, 150.318183]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726567, 150.318181]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726319, 150.305347]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726286, 150.305372]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726192, 150.306125]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726036, 150.305900]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726025, 150.305911]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726022, 150.305489]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726011, 150.305458]
    },
    {
      'name': 'Katoomba',
      'location': [-33.726008, 150.305456]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725839, 150.369194]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725836, 150.369197]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725833, 150.369200]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725828, 150.369203]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725825, 150.369203]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725817, 150.369217]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725814, 150.369214]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725811, 150.369208]
    },
    {
      'name': 'Katoomba',
      'location': [-33.725769, 150.317933]
    },
    {
      'name': 'Katoomba',
      'location': [-33.725756, 150.317933]
    },
    {
      'name': 'Blue Mountains',
      'location': [-33.725711, 150.369217]
    },
    {
      'name': 'Featherdale Wildlife Park',
      'location': [-33.725650, 150.369089]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722500, 150.321106]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722497, 150.321108]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722394, 150.317908]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722294, 150.317825]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722239, 150.317606]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722167, 150.320042]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722117, 150.319925]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722092, 150.321858]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722050, 150.322278]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722047, 150.322267]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722044, 150.322258]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722042, 150.322256]
    },
    {
      'name': 'Katoomba',
      'location': [-33.722039, 150.322244]
    },
    {
      'name': 'Katoomba',
      'location': [-33.721981, 150.321689]
    },
    {
      'name': 'Katoomba',
      'location': [-33.721586, 150.322364]
    },
    {
      'name': 'Katoomba',
      'location': [-33.721583, 150.322358]
    },
    {
      'name': 'Katoomba',
      'location': [-33.721581, 150.322344]
    },
    {
      'name': 'Katoomba',
      'location': [-33.721578, 150.322339]
    },
    {
      'name': 'Katoomba',
      'location': [-33.721572, 150.322325]
    },
    {
      'name': 'Katoomba',
      'location': [-33.721400, 150.319025]
    },
    {
      'name': 'Katoomba',
      'location': [-33.720819, 150.317328]
    },
    {
      'name': 'Katoomba',
      'location': [-33.720800, 150.317328]
    },
    {
      'name': 'Katoomba',
      'location': [-33.720556, 150.317733]
    },
    {
      'name': 'Katoomba',
      'location': [-33.720553, 150.317736]
    },
    {
      'name': 'Katoomba',
      'location': [-33.720522, 150.318614]
    },
    {
      'name': 'Katoomba',
      'location': [-33.720378, 150.322997]
    },
    {
      'name': 'Katoomba',
      'location': [-33.719431, 150.322917]
    },
    {
      'name': 'Singapore',
      'location': [1.356041, 103.986089]
    },
    {
      'name': 'Monterey',
      'location': [36.604369, -121.892750]
    },
    {
      'name': 'Monterey',
      'location': [36.617983, -121.901900]
    },
    {
      'name': 'Monterey',
      'location': [36.618025, -121.901564]
    },
    {
      'name': 'Monterey',
      'location': [36.618183, -121.901608]
    },
    {
      'name': 'Monterey',
      'location': [36.618261, -121.901864]
    },
    {
      'name': 'Monterey',
      'location': [36.618678, -121.901533]
    },
    {
      'name': 'Monterey',
      'location': [36.618681, -121.901867]
    },
    {
      'name': 'Santa Cruz',
      'location': [36.957289, -122.017222]
    },
    {
      'name': 'Santa Cruz',
      'location': [36.958578, -122.017522]
    },
    {
      'name': 'Santa Cruz',
      'location': [36.962511, -122.021550]
    },
    {
      'name': 'Santa Cruz',
      'location': [36.962739, -122.023006]
    },
    {
      'name': 'Winchester',
      'location': [37.318339, -121.951006]
    },
    {
      'name': 'Sunnyvale',
      'location': [37.377028, -122.030169]
    },
    {
      'name': 'Sunnyvale',
      'location': [37.377814, -122.029889]
    },
    {
      'name': 'Mountain View',
      'location': [37.405578, -122.066789]
    },
    {
      'name': 'Mountain View',
      'location': [37.405686, -122.066708]
    },
    {
      'name': 'Mountain View',
      'location': [37.405856, -122.067047]
    },
    {
      'name': 'Mountain View',
      'location': [37.408467, -122.068744]
    },
    {
      'name': 'Mountain View',
      'location': [37.408856, -122.069633]
    },
    {
      'name': 'Mountain View',
      'location': [37.419278, -122.082092]
    },
    {
      'name': 'Mountain View',
      'location': [37.419989, -122.082769]
    },
    {
      'name': 'Mountain View',
      'location': [37.420314, -122.083967]
    },
    {
      'name': 'Mountain View',
      'location': [37.420564, -122.081628]
    },
    {
      'name': 'Mountain View',
      'location': [37.420844, -122.082103]
    },
    {
      'name': 'Mountain View',
      'location': [37.421139, -122.074664]
    },
    {
      'name': 'San Francisco',
      'location': [37.599928, -122.386364]
    },
    {
      'name': 'San Francisco',
      'location': [37.612860, -122.389453]
    },
    {
      'name': 'San Francisco',
      'location': [37.614258, -122.391089]
    },
    {
      'name': 'San Francisco',
      'location': [37.755200, -122.300797]
    },
    {
      'name': 'Castro',
      'location': [37.760814, -122.435169]
    },
    {
      'name': 'Castro',
      'location': [37.761289, -122.435125]
    },
    {
      'name': 'Castro',
      'location': [37.761717, -122.435164]
    },
    {
      'name': 'Castro',
      'location': [37.761903, -122.435222]
    },
    {
      'name': 'Castro',
      'location': [37.762094, -122.435239]
    },
    {
      'name': 'Castro',
      'location': [37.762353, -122.435331]
    },
    {
      'name': 'Castro',
      'location': [37.762419, -122.435083]
    },
    {
      'name': 'Castro',
      'location': [37.762453, -122.435381]
    },
    {
      'name': 'Castro',
      'location': [37.762458, -122.434997]
    },
    {
      'name': 'Castro',
      'location': [37.762469, -122.434767]
    },
    {
      'name': 'Castro',
      'location': [37.762492, -122.434919]
    },
    {
      'name': 'Castro',
      'location': [37.762539, -122.434633]
    },
    {
      'name': 'Castro',
      'location': [37.762575, -122.434881]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.766497, -122.482014]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.768466, -122.472922]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.768481, -122.472897]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.768483, -122.472892]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.769173, -122.472027]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.769750, -122.464289]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.769856, -122.470128]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.769867, -122.470389]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.769875, -122.470178]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.769906, -122.470128]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.769908, -122.469556]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.769933, -122.470142]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770014, -122.470253]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770031, -122.470292]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770050, -122.468336]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770053, -122.470317]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770056, -122.470317]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770067, -122.468336]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770075, -122.468317]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770078, -122.468314]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770081, -122.469061]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770086, -122.468364]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770089, -122.468336]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770111, -122.468322]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770117, -122.468308]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770125, -122.469156]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770144, -122.468611]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770156, -122.470219]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770167, -122.469444]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770175, -122.469456]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770183, -122.469869]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770192, -122.469489]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770200, -122.469881]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770214, -122.469875]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770222, -122.469781]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770242, -122.469853]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770261, -122.469661]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770264, -122.469822]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770267, -122.469842]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770275, -122.469856]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770286, -122.469703]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770306, -122.469719]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770317, -122.469736]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770322, -122.469800]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770328, -122.470072]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770436, -122.466717]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770439, -122.467175]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770522, -122.467428]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770533, -122.470078]
    },
    {
      'name': 'Japanese Gardens',
      'location': [37.770542, -122.470058]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770544, -122.467414]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770614, -122.466589]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770644, -122.466475]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.770947, -122.480468]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.771383, -122.477942]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.771465, -122.477708]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.771564, -122.454158]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.771742, -122.454417]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772211, -122.459811]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772217, -122.460114]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772250, -122.466439]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772328, -122.460175]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772383, -122.459158]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772386, -122.459167]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772392, -122.459181]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772400, -122.459197]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772425, -122.459256]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772428, -122.459264]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772431, -122.459272]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772436, -122.459286]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772442, -122.459297]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772464, -122.459225]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772472, -122.459372]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772475, -122.459431]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772481, -122.459417]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772483, -122.459400]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772489, -122.459417]
    },
    {
      'name': 'Golden Gate Park',
      'location': [37.772506, -122.465878]
    },
    {
      'name': 'SoMa',
      'location': [37.776519, -122.394781]
    },
    {
      'name': 'SoMa',
      'location': [37.777181, -122.395456]
    },
    {
      'name': 'Civic Center',
      'location': [37.778581, -122.416731]
    },
    {
      'name': 'Civic Center',
      'location': [37.778750, -122.415375]
    },
    {
      'name': 'Civic Center',
      'location': [37.778858, -122.417142]
    },
    {
      'name': 'Civic Center',
      'location': [37.779319, -122.418117]
    },
    {
      'name': 'Civic Center',
      'location': [37.779397, -122.418411]
    },
    {
      'name': 'Civic Center',
      'location': [37.779411, -122.418297]
    },
    {
      'name': 'Civic Center',
      'location': [37.779419, -122.417456]
    },
    {
      'name': 'Civic Center',
      'location': [37.779453, -122.418644]
    },
    {
      'name': 'Civic Center',
      'location': [37.779683, -122.415808]
    },
    {
      'name': 'Civic Center',
      'location': [37.779747, -122.415828]
    },
    {
      'name': 'Asian Art Museum',
      'location': [37.780153, -122.416308]
    },
    {
      'name': 'Asian Art Museum',
      'location': [37.780192, -122.416739]
    },
    {
      'name': 'Asian Art Museum',
      'location': [37.780222, -122.415989]
    },
    {
      'name': 'Asian Art Museum',
      'location': [37.780250, -122.416283]
    },
    {
      'name': 'Asian Art Museum',
      'location': [37.780356, -122.416358]
    },
    {
      'name': 'Asian Art Museum',
      'location': [37.780361, -122.416006]
    },
    {
      'name': 'SoMa',
      'location': [37.783239, -122.402547]
    },
    {
      'name': 'SoMa',
      'location': [37.783258, -122.401328]
    },
    {
      'name': 'SoMa',
      'location': [37.783275, -122.402208]
    },
    {
      'name': 'SoMa',
      'location': [37.783361, -122.400967]
    },
    {
      'name': 'SoMa',
      'location': [37.783547, -122.402936]
    },
    {
      'name': 'SoMa',
      'location': [37.783636, -122.401989]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.783919, -122.388097]
    },
    {
      'name': 'SoMa',
      'location': [37.784156, -122.402503]
    },
    {
      'name': 'SoMa',
      'location': [37.784181, -122.403744]
    },
    {
      'name': 'San Francisco',
      'location': [37.784217, -122.405998]
    },
    {
      'name': 'San Francisco',
      'location': [37.784428, -122.406531]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.784453, -122.388042]
    },
    {
      'name': 'SoMa',
      'location': [37.784522, -122.404092]
    },
    {
      'name': 'Downtown',
      'location': [37.784719, -122.407800]
    },
    {
      'name': 'Downtown',
      'location': [37.784811, -122.407783]
    },
    {
      'name': 'SoMa',
      'location': [37.784839, -122.401053]
    },
    {
      'name': 'SoMa',
      'location': [37.784867, -122.389558]
    },
    {
      'name': 'Downtown',
      'location': [37.784875, -122.407797]
    },
    {
      'name': 'SoMa',
      'location': [37.785033, -122.401883]
    },
    {
      'name': 'Downtown',
      'location': [37.785142, -122.429742]
    },
    {
      'name': 'SoMa',
      'location': [37.785281, -122.400961]
    },
    {
      'name': 'Downtown',
      'location': [37.785306, -122.430283]
    },
    {
      'name': 'Downtown',
      'location': [37.785419, -122.407953]
    },
    {
      'name': 'Downtown',
      'location': [37.785422, -122.405275]
    },
    {
      'name': 'Downtown',
      'location': [37.785544, -122.408058]
    },
    {
      'name': 'Downtown',
      'location': [37.785567, -122.406242]
    },
    {
      'name': 'SoMa',
      'location': [37.785750, -122.400800]
    },
    {
      'name': 'SoMa',
      'location': [37.785867, -122.401694]
    },
    {
      'name': 'San Francisco',
      'location': [37.785917, -122.429875]
    },
    {
      'name': 'Downtown',
      'location': [37.785928, -122.405775]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.785942, -122.387667]
    },
    {
      'name': 'SoMa',
      'location': [37.785953, -122.389700]
    },
    {
      'name': 'SoMa',
      'location': [37.786008, -122.389650]
    },
    {
      'name': 'Lincoln Park',
      'location': [37.786156, -122.505167]
    },
    {
      'name': 'Lincoln Park',
      'location': [37.786264, -122.501239]
    },
    {
      'name': 'San Francisco',
      'location': [37.786281, -122.408728]
    },
    {
      'name': 'San Francisco',
      'location': [37.786535, -122.411170]
    },
    {
      'name': 'SoMa',
      'location': [37.786636, -122.402372]
    },
    {
      'name': 'Downtown',
      'location': [37.786778, -122.412250]
    },
    {
      'name': 'Downtown',
      'location': [37.786844, -122.408217]
    },
    {
      'name': 'San Francisco',
      'location': [37.786939, -122.410005]
    },
    {
      'name': 'San Francisco',
      'location': [37.787050, -122.409988]
    },
    {
      'name': 'Downtown',
      'location': [37.787128, -122.410683]
    },
    {
      'name': 'SoMa',
      'location': [37.787139, -122.401050]
    },
    {
      'name': 'Downtown',
      'location': [37.787186, -122.411619]
    },
    {
      'name': 'Downtown',
      'location': [37.787283, -122.408150]
    },
    {
      'name': 'Downtown',
      'location': [37.787289, -122.408308]
    },
    {
      'name': 'Downtown',
      'location': [37.787331, -122.407453]
    },
    {
      'name': 'Lincoln Park',
      'location': [37.787669, -122.501406]
    },
    {
      'name': 'Downtown',
      'location': [37.787883, -122.407419]
    },
    {
      'name': 'Downtown',
      'location': [37.787922, -122.402983]
    },
    {
      'name': 'Downtown',
      'location': [37.787942, -122.407478]
    },
    {
      'name': 'Downtown',
      'location': [37.788122, -122.402747]
    },
    {
      'name': 'Downtown',
      'location': [37.788133, -122.408117]
    },
    {
      'name': 'SoMa',
      'location': [37.788153, -122.399806]
    },
    {
      'name': 'Downtown',
      'location': [37.788181, -122.407869]
    },
    {
      'name': 'Downtown',
      'location': [37.788464, -122.406544]
    },
    {
      'name': 'Chinatown',
      'location': [37.788472, -122.406614]
    },
    {
      'name': 'Chinatown',
      'location': [37.788483, -122.406375]
    },
    {
      'name': 'SoMa',
      'location': [37.788514, -122.399269]
    },
    {
      'name': 'Downtown',
      'location': [37.788556, -122.408458]
    },
    {
      'name': 'Chinatown',
      'location': [37.788564, -122.405836]
    },
    {
      'name': 'Downtown',
      'location': [37.788600, -122.405575]
    },
    {
      'name': 'Chinatown',
      'location': [37.788603, -122.405953]
    },
    {
      'name': 'Chinatown',
      'location': [37.788628, -122.405314]
    },
    {
      'name': 'Chinatown',
      'location': [37.788714, -122.405436]
    },
    {
      'name': 'Downtown',
      'location': [37.788878, -122.404392]
    },
    {
      'name': 'Chinatown',
      'location': [37.788894, -122.405328]
    },
    {
      'name': 'SoMa',
      'location': [37.789008, -122.403589]
    },
    {
      'name': 'Downtown',
      'location': [37.789367, -122.406889]
    },
    {
      'name': 'SoMa',
      'location': [37.789494, -122.398081]
    },
    {
      'name': 'SoMa',
      'location': [37.789536, -122.390486]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.789639, -122.388225]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.789703, -122.388181]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.789856, -122.388414]
    },
    {
      'name': 'Chinatown',
      'location': [37.790103, -122.405747]
    },
    {
      'name': 'San Francisco',
      'location': [37.790194, -122.404036]
    },
    {
      'name': 'Chinatown',
      'location': [37.790489, -122.405558]
    },
    {
      'name': 'Chinatown',
      'location': [37.790583, -122.405572]
    },
    {
      'name': 'Chinatown',
      'location': [37.790586, -122.405622]
    },
    {
      'name': 'Chinatown',
      'location': [37.790639, -122.405508]
    },
    {
      'name': 'Chinatown',
      'location': [37.790781, -122.405703]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791181, -122.389094]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791236, -122.389228]
    },
    {
      'name': 'Chinatown',
      'location': [37.791281, -122.405878]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791319, -122.389353]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791339, -122.389342]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791408, -122.389544]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791431, -122.389389]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791436, -122.389592]
    },
    {
      'name': 'Chinatown',
      'location': [37.791483, -122.405617]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791513, -122.389487]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791525, -122.389486]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791526, -122.389487]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791544, -122.390589]
    },
    {
      'name': 'Chinatown',
      'location': [37.791564, -122.405719]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791578, -122.389564]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.791600, -122.389594]
    },
    {
      'name': 'Chinatown',
      'location': [37.791689, -122.405347]
    },
    {
      'name': 'SoMa',
      'location': [37.791850, -122.391611]
    },
    {
      'name': 'Chinatown',
      'location': [37.791911, -122.405392]
    },
    {
      'name': 'Chinatown',
      'location': [37.791969, -122.405272]
    },
    {
      'name': 'Chinatown',
      'location': [37.791994, -122.405475]
    },
    {
      'name': 'SoMa',
      'location': [37.792131, -122.392597]
    },
    {
      'name': 'Chinatown',
      'location': [37.792297, -122.405144]
    },
    {
      'name': 'Chinatown',
      'location': [37.792500, -122.405542]
    },
    {
      'name': 'Chinatown',
      'location': [37.792547, -122.405803]
    },
    {
      'name': 'Chinatown',
      'location': [37.792561, -122.405894]
    },
    {
      'name': 'Chinatown',
      'location': [37.792622, -122.405931]
    },
    {
      'name': 'Chinatown',
      'location': [37.792647, -122.405894]
    },
    {
      'name': 'Downtown',
      'location': [37.792861, -122.396997]
    },
    {
      'name': 'Downtown',
      'location': [37.793156, -122.398056]
    },
    {
      'name': 'Chinatown',
      'location': [37.793242, -122.406631]
    },
    {
      'name': 'Chinatown',
      'location': [37.793281, -122.406481]
    },
    {
      'name': 'Chinatown',
      'location': [37.793358, -122.406589]
    },
    {
      'name': 'Chinatown',
      'location': [37.793450, -122.406086]
    },
    {
      'name': 'Downtown',
      'location': [37.793594, -122.396283]
    },
    {
      'name': 'Downtown',
      'location': [37.793683, -122.396225]
    },
    {
      'name': 'Downtown',
      'location': [37.793692, -122.396111]
    },
    {
      'name': 'Downtown',
      'location': [37.793703, -122.396283]
    },
    {
      'name': 'Downtown',
      'location': [37.793731, -122.396031]
    },
    {
      'name': 'Chinatown',
      'location': [37.793739, -122.406769]
    },
    {
      'name': 'Chinatown',
      'location': [37.793789, -122.406797]
    },
    {
      'name': 'Downtown',
      'location': [37.793867, -122.402798]
    },
    {
      'name': 'Baker beach',
      'location': [37.793895, -122.483657]
    },
    {
      'name': 'Baker beach',
      'location': [37.793898, -122.483646]
    },
    {
      'name': 'Baker beach',
      'location': [37.793901, -122.483698]
    },
    {
      'name': 'Baker beach',
      'location': [37.793902, -122.483638]
    },
    {
      'name': 'Baker beach',
      'location': [37.793903, -122.483638]
    },
    {
      'name': 'Baker beach',
      'location': [37.793905, -122.483665]
    },
    {
      'name': 'Baker beach',
      'location': [37.793913, -122.483665]
    },
    {
      'name': 'Baker beach',
      'location': [37.793917, -122.483638]
    },
    {
      'name': 'Baker beach',
      'location': [37.793933, -122.483626]
    },
    {
      'name': 'Baker beach',
      'location': [37.793935, -122.483700]
    },
    {
      'name': 'Baker beach',
      'location': [37.793947, -122.483760]
    },
    {
      'name': 'Baker beach',
      'location': [37.793957, -122.483760]
    },
    {
      'name': 'Baker beach',
      'location': [37.793961, -122.483760]
    },
    {
      'name': 'Baker beach',
      'location': [37.793963, -122.483760]
    },
    {
      'name': 'Chinatown',
      'location': [37.794192, -122.406881]
    },
    {
      'name': 'Downtown',
      'location': [37.794227, -122.402806]
    },
    {
      'name': 'Chinatown',
      'location': [37.794242, -122.406189]
    },
    {
      'name': 'Chinatown',
      'location': [37.794244, -122.406189]
    },
    {
      'name': 'Downtown',
      'location': [37.794385, -122.402889]
    },
    {
      'name': 'Downtown',
      'location': [37.794486, -122.403133]
    },
    {
      'name': 'Downtown',
      'location': [37.794550, -122.403231]
    },
    {
      'name': 'Downtown',
      'location': [37.794583, -122.403222]
    },
    {
      'name': 'Chinatown',
      'location': [37.794653, -122.405392]
    },
    {
      'name': 'Chinatown',
      'location': [37.794667, -122.405567]
    },
    {
      'name': 'Downtown',
      'location': [37.794749, -122.402897]
    },
    {
      'name': 'Downtown',
      'location': [37.794806, -122.395317]
    },
    {
      'name': 'Chinatown',
      'location': [37.794814, -122.407764]
    },
    {
      'name': 'Chinatown',
      'location': [37.794828, -122.405594]
    },
    {
      'name': 'Downtown',
      'location': [37.794842, -122.394897]
    },
    {
      'name': 'Downtown',
      'location': [37.794897, -122.394333]
    },
    {
      'name': 'Chinatown',
      'location': [37.794908, -122.405611]
    },
    {
      'name': 'Downtown',
      'location': [37.794961, -122.394058]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.794975, -122.392631]
    },
    {
      'name': 'Chinatown',
      'location': [37.795111, -122.406511]
    },
    {
      'name': 'Chinatown',
      'location': [37.795131, -122.407317]
    },
    {
      'name': 'Chinatown',
      'location': [37.795136, -122.406414]
    },
    {
      'name': 'Chinatown',
      'location': [37.795167, -122.406372]
    },
    {
      'name': 'Chinatown',
      'location': [37.795183, -122.406308]
    },
    {
      'name': 'Chinatown',
      'location': [37.795194, -122.407336]
    },
    {
      'name': 'Chinatown',
      'location': [37.795211, -122.406181]
    },
    {
      'name': 'Downtown',
      'location': [37.795231, -122.403265]
    },
    {
      'name': 'Chinatown',
      'location': [37.795244, -122.406178]
    },
    {
      'name': 'Chinatown',
      'location': [37.795272, -122.405942]
    },
    {
      'name': 'Chinatown',
      'location': [37.795281, -122.407317]
    },
    {
      'name': 'Chinatown',
      'location': [37.795342, -122.407431]
    },
    {
      'name': 'Chinatown',
      'location': [37.795353, -122.407439]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.795369, -122.391761]
    },
    {
      'name': 'Baker beach',
      'location': [37.795372, -122.483094]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.795381, -122.391728]
    },
    {
      'name': 'Chinatown',
      'location': [37.795467, -122.407428]
    },
    {
      'name': 'Chinatown',
      'location': [37.795533, -122.407439]
    },
    {
      'name': 'San Francisco',
      'location': [37.795581, -122.403522]
    },
    {
      'name': 'Downtown',
      'location': [37.795705, -122.403355]
    },
    {
      'name': 'Downtown',
      'location': [37.795717, -122.403612]
    },
    {
      'name': 'San Francisco',
      'location': [37.795727, -122.403241]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.795792, -122.391211]
    },
    {
      'name': 'Chinatown',
      'location': [37.795817, -122.407606]
    },
    {
      'name': 'Chinatown',
      'location': [37.795836, -122.407603]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.795869, -122.395153]
    },
    {
      'name': 'Chinatown',
      'location': [37.795925, -122.407675]
    },
    {
      'name': 'Chinatown',
      'location': [37.795983, -122.407558]
    },
    {
      'name': 'San Francisco',
      'location': [37.796515, -122.402788]
    },
    {
      'name': 'San Francisco',
      'location': [37.796730, -122.402468]
    },
    {
      'name': 'Chinatown',
      'location': [37.796753, -122.406828]
    },
    {
      'name': 'San Francisco',
      'location': [37.796773, -122.402394]
    },
    {
      'name': 'San Francisco',
      'location': [37.796919, -122.402074]
    },
    {
      'name': 'San Francisco',
      'location': [37.797055, -122.405260]
    },
    {
      'name': 'San Francisco',
      'location': [37.797214, -122.405722]
    },
    {
      'name': 'San Francisco',
      'location': [37.797260, -122.404940]
    },
    {
      'name': 'San Francisco',
      'location': [37.797505, -122.406623]
    },
    {
      'name': 'San Francisco',
      'location': [37.797506, -122.406702]
    },
    {
      'name': 'San Francisco',
      'location': [37.797526, -122.406686]
    },
    {
      'name': 'San Francisco',
      'location': [37.797547, -122.406560]
    },
    {
      'name': 'San Francisco',
      'location': [37.797552, -122.406565]
    },
    {
      'name': 'San Francisco',
      'location': [37.797589, -122.406501]
    },
    {
      'name': 'San Francisco',
      'location': [37.797598, -122.406512]
    },
    {
      'name': 'San Francisco',
      'location': [37.797648, -122.406372]
    },
    {
      'name': 'San Francisco',
      'location': [37.797698, -122.406572]
    },
    {
      'name': 'San Francisco',
      'location': [37.797758, -122.406681]
    },
    {
      'name': 'San Francisco',
      'location': [37.797890, -122.406404]
    },
    {
      'name': 'San Francisco',
      'location': [37.797989, -122.407025]
    },
    {
      'name': 'San Francisco',
      'location': [37.798250, -122.407330]
    },
    {
      'name': 'San Francisco',
      'location': [37.798442, -122.407681]
    },
    {
      'name': 'San Francisco',
      'location': [37.798483, -122.407756]
    },
    {
      'name': 'San Francisco',
      'location': [37.800781, -122.410760]
    },
    {
      'name': 'San Francisco',
      'location': [37.800948, -122.409746]
    },
    {
      'name': 'San Francisco',
      'location': [37.800976, -122.409771]
    },
    {
      'name': 'San Francisco',
      'location': [37.801079, -122.410297]
    },
    {
      'name': 'San Francisco',
      'location': [37.801269, -122.410079]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.801614, -122.408219]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.801623, -122.407427]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.801717, -122.406601]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802137, -122.405733]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802139, -122.405781]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802153, -122.405787]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802155, -122.405787]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802336, -122.405814]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802389, -122.405775]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802408, -122.405806]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802642, -122.405897]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802692, -122.405855]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802721, -122.405897]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.802878, -122.406017]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.804720, -122.408431]
    },
    {
      'name': 'Telegraph Hill',
      'location': [37.804800, -122.408437]
    },
    {
      'name': 'Bay beach',
      'location': [37.806058, -122.454178]
    },
    {
      'name': 'Bay beach',
      'location': [37.806203, -122.454267]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.806233, -122.408001]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.806363, -122.405037]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.806450, -122.406471]
    },
    {
      'name': 'Bay beach',
      'location': [37.806458, -122.454661]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.806611, -122.474594]
    },
    {
      'name': 'Bay beach',
      'location': [37.806647, -122.452372]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.807080, -122.404167]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.807211, -122.473914]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.807301, -122.403997]
    },
    {
      'name': 'Bay beach',
      'location': [37.807472, -122.436478]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.807908, -122.475794]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.807911, -122.475797]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.807967, -122.475881]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.807997, -122.475908]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.808003, -122.475914]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.808014, -122.475922]
    },
    {
      'name': 'The Embarcadero',
      'location': [37.808019, -122.407356]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.808036, -122.475919]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.808175, -122.475850]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.808181, -122.475858]
    },
    {
      'name': 'Golden Gate Bridge',
      'location': [37.808183, -122.475861]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.808336, -122.402692]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.808368, -122.402399]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.808374, -122.402348]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.808449, -122.402416]
    },
    {
      'name': 'Pier 39',
      'location': [37.808572, -122.410178]
    },
    {
      'name': 'Pier 39',
      'location': [37.808597, -122.409653]
    },
    {
      'name': 'Aquarium of the Bay',
      'location': [37.808772, -122.409317]
    },
    {
      'name': 'Pier 39',
      'location': [37.808997, -122.410022]
    },
    {
      'name': 'Pier 39',
      'location': [37.809014, -122.410025]
    },
    {
      'name': 'Pier 39',
      'location': [37.809114, -122.412967]
    },
    {
      'name': 'Pier 39',
      'location': [37.809164, -122.409378]
    },
    {
      'name': 'Pier 39',
      'location': [37.809236, -122.412967]
    },
    {
      'name': 'Pier 39',
      'location': [37.809250, -122.410047]
    },
    {
      'name': 'Pier 39',
      'location': [37.809439, -122.410119]
    },
    {
      'name': 'Pier 39',
      'location': [37.809481, -122.410136]
    },
    {
      'name': 'San Francisco',
      'location': [37.809914, -122.410771]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.810132, -122.403946]
    },
    {
      'name': 'Pier 39',
      'location': [37.810419, -122.411025]
    },
    {
      'name': 'Pier 39',
      'location': [37.810597, -122.410108]
    },
    {
      'name': 'Pier 39',
      'location': [37.810614, -122.410100]
    },
    {
      'name': 'Pier 39',
      'location': [37.810615, -122.410102]
    },
    {
      'name': 'Pier 39',
      'location': [37.810839, -122.411325]
    },
    {
      'name': 'Pier 39',
      'location': [37.811289, -122.410925]
    },
    {
      'name': 'Pier 39',
      'location': [37.811292, -122.410914]
    },
    {
      'name': 'Pier 39',
      'location': [37.811372, -122.410358]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.812480, -122.406028]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.814301, -122.408227]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.814439, -122.408412]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.814474, -122.408459]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.814508, -122.408505]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.814544, -122.408552]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.817205, -122.411866]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.820468, -122.415863]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.820498, -122.415912]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.820528, -122.415961]
    },
    {
      'name': 'Ferry to Alcatraz',
      'location': [37.820558, -122.416011]
    },
    {
      'name': 'Alcatraz',
      'location': [37.823013, -122.419947]
    },
    {
      'name': 'Alcatraz',
      'location': [37.823975, -122.421975]
    },
    {
      'name': 'Alcatraz',
      'location': [37.824591, -122.423365]
    },
    {
      'name': 'Alcatraz',
      'location': [37.825874, -122.425444]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826084, -122.425870]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826326, -122.422235]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826335, -122.422822]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826355, -122.422693]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826381, -122.422477]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826397, -122.422832]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826407, -122.422767]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826417, -122.422753]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826430, -122.422585]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826443, -122.422791]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826485, -122.423053]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826578, -122.422609]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826612, -122.423004]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826619, -122.423137]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826621, -122.422619]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826628, -122.423048]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826630, -122.423314]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826637, -122.422903]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826643, -122.422877]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826650, -122.422996]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826652, -122.422704]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826655, -122.422994]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826685, -122.423076]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826687, -122.422780]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826720, -122.420756]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826737, -122.421333]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826742, -122.421318]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826745, -122.421318]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826771, -122.421355]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826773, -122.420937]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826790, -122.422985]
    },
    {
      'name': 'Alcatraz',
      'location': [37.826959, -122.421759]
    },
    {
      'name': 'Alcatraz',
      'location': [37.827003, -122.423136]
    },
    {
      'name': 'Alcatraz',
      'location': [37.827016, -122.422685]
    },
    {
      'name': 'Alcatraz',
      'location': [37.827023, -122.423116]
    },
    {
      'name': 'Alcatraz',
      'location': [37.827081, -122.422095]
    },
    {
      'name': 'Alcatraz',
      'location': [37.827483, -122.422756]
    },
    {
      'name': 'Alcatraz',
      'location': [37.827767, -122.422112]
    },
    {
      'name': 'Alcatraz',
      'location': [37.827886, -122.422287]
    },
    {
      'name': 'Alcatraz',
      'location': [37.827952, -122.422377]
    },
    {
      'name': 'Alcatraz',
      'location': [37.828066, -122.422532]
    },
    {
      'name': 'Madrid',
      'location': [40.416589, -3.714464]
    },
    {
      'name': 'Madrid',
      'location': [40.416592, -3.714439]
    },
    {
      'name': 'Madrid',
      'location': [40.418956, -3.686272]
    },
    {
      'name': 'Madrid',
      'location': [40.419039, -3.693956]
    },
    {
      'name': 'Madrid',
      'location': [40.419472, -3.687522]
    },
    {
      'name': 'Madrid',
      'location': [40.419581, -3.693647]
    },
    {
      'name': 'Madrid',
      'location': [40.419597, -3.693647]
    },
    {
      'name': 'Madrid',
      'location': [40.419942, -3.688058]
    },
    {
      'name': 'Madrid',
      'location': [40.419994, -3.687858]
    },
    {
      'name': 'Tarragona',
      'location': [41.185439, 1.563244]
    },
    {
      'name': 'Tarragona',
      'location': [41.186211, 1.563394]
    },
    {
      'name': 'Barcelona',
      'location': [41.375778, 2.177969]
    },
    {
      'name': 'Barcelona',
      'location': [41.375867, 2.177942]
    },
    {
      'name': 'Barcelona',
      'location': [41.377869, 2.146825]
    },
    {
      'name': 'Barcelona',
      'location': [41.377953, 2.147881]
    },
    {
      'name': 'Barcelona',
      'location': [41.378042, 2.146744]
    },
    {
      'name': 'Barcelona',
      'location': [41.380469, 2.175058]
    },
    {
      'name': 'Barcelona',
      'location': [41.381644, 2.172978]
    },
    {
      'name': 'Barcelona',
      'location': [41.394953, 2.161758]
    },
    {
      'name': 'Barcelona',
      'location': [41.403942, 2.175136]
    },
    {
      'name': 'Roma',
      'location': [41.887569, 12.487039]
    },
    {
      'name': 'Roma',
      'location': [41.887647, 12.486972]
    },
    {
      'name': 'Roma',
      'location': [41.887722, 12.487156]
    },
    {
      'name': 'Roma',
      'location': [41.887769, 12.486100]
    },
    {
      'name': 'Roma',
      'location': [41.887850, 12.487294]
    },
    {
      'name': 'Roma',
      'location': [41.887900, 12.487361]
    },
    {
      'name': 'Roma',
      'location': [41.887958, 12.487469]
    },
    {
      'name': 'Roma',
      'location': [41.888053, 12.487172]
    },
    {
      'name': 'Roma',
      'location': [41.888075, 12.487078]
    },
    {
      'name': 'Roma',
      'location': [41.888081, 12.487000]
    },
    {
      'name': 'Roma',
      'location': [41.888094, 12.487006]
    },
    {
      'name': 'Roma',
      'location': [41.888508, 12.487033]
    },
    {
      'name': 'Roma',
      'location': [41.888542, 12.487044]
    },
    {
      'name': 'Roma',
      'location': [41.889033, 12.486811]
    },
    {
      'name': 'Roma',
      'location': [41.889156, 12.486122]
    },
    {
      'name': 'Roma',
      'location': [41.889311, 12.490833]
    },
    {
      'name': 'Roma',
      'location': [41.889381, 12.486372]
    },
    {
      'name': 'Roma',
      'location': [41.889439, 12.486411]
    },
    {
      'name': 'Roma',
      'location': [41.889444, 12.491036]
    },
    {
      'name': 'Roma',
      'location': [41.889583, 12.492028]
    },
    {
      'name': 'Roma',
      'location': [41.889631, 12.490889]
    },
    {
      'name': 'Roma',
      'location': [41.889711, 12.491183]
    },
    {
      'name': 'Roma',
      'location': [41.889728, 12.492583]
    },
    {
      'name': 'Roma',
      'location': [41.889744, 12.492450]
    },
    {
      'name': 'Roma',
      'location': [41.889747, 12.492469]
    },
    {
      'name': 'Roma',
      'location': [41.889756, 12.492489]
    },
    {
      'name': 'Roma',
      'location': [41.889758, 12.490958]
    },
    {
      'name': 'Roma',
      'location': [41.889775, 12.492225]
    },
    {
      'name': 'Roma',
      'location': [41.889783, 12.492139]
    },
    {
      'name': 'Roma',
      'location': [41.889789, 12.492178]
    },
    {
      'name': 'Roma',
      'location': [41.889792, 12.492156]
    },
    {
      'name': 'Roma',
      'location': [41.889806, 12.492150]
    },
    {
      'name': 'Roma',
      'location': [41.889811, 12.492075]
    },
    {
      'name': 'Roma',
      'location': [41.889836, 12.490850]
    },
    {
      'name': 'Roma',
      'location': [41.889864, 12.491908]
    },
    {
      'name': 'Roma',
      'location': [41.889869, 12.490778]
    },
    {
      'name': 'Roma',
      'location': [41.889881, 12.493778]
    },
    {
      'name': 'Roma',
      'location': [41.889892, 12.490611]
    },
    {
      'name': 'Roma',
      'location': [41.889900, 12.490533]
    },
    {
      'name': 'Roma',
      'location': [41.889906, 12.490725]
    },
    {
      'name': 'Roma',
      'location': [41.889917, 12.492222]
    },
    {
      'name': 'Roma',
      'location': [41.889939, 12.492256]
    },
    {
      'name': 'Roma',
      'location': [41.889947, 12.492264]
    },
    {
      'name': 'Roma',
      'location': [41.889969, 12.492217]
    },
    {
      'name': 'Roma',
      'location': [41.889981, 12.492253]
    },
    {
      'name': 'Roma',
      'location': [41.889983, 12.492281]
    },
    {
      'name': 'Roma',
      'location': [41.889992, 12.492272]
    },
    {
      'name': 'Roma',
      'location': [41.890000, 12.492992]
    },
    {
      'name': 'Roma',
      'location': [41.890003, 12.491531]
    },
    {
      'name': 'Roma',
      'location': [41.890014, 12.492994]
    },
    {
      'name': 'Roma',
      'location': [41.890042, 12.492289]
    },
    {
      'name': 'Roma',
      'location': [41.890044, 12.493006]
    },
    {
      'name': 'Roma',
      'location': [41.890047, 12.493008]
    },
    {
      'name': 'Roma',
      'location': [41.890053, 12.493014]
    },
    {
      'name': 'Roma',
      'location': [41.890097, 12.487536]
    },
    {
      'name': 'Roma',
      'location': [41.890114, 12.491569]
    },
    {
      'name': 'Roma',
      'location': [41.890128, 12.487678]
    },
    {
      'name': 'Roma',
      'location': [41.890172, 12.491628]
    },
    {
      'name': 'Roma',
      'location': [41.890203, 12.490494]
    },
    {
      'name': 'Roma',
      'location': [41.890211, 12.492942]
    },
    {
      'name': 'Roma',
      'location': [41.890289, 12.491561]
    },
    {
      'name': 'Roma',
      'location': [41.890306, 12.492328]
    },
    {
      'name': 'Roma',
      'location': [41.890331, 12.491894]
    },
    {
      'name': 'Roma',
      'location': [41.890353, 12.491489]
    },
    {
      'name': 'Roma',
      'location': [41.890356, 12.491786]
    },
    {
      'name': 'Roma',
      'location': [41.890389, 12.491617]
    },
    {
      'name': 'Roma',
      'location': [41.890419, 12.491644]
    },
    {
      'name': 'Roma',
      'location': [41.890425, 12.491625]
    },
    {
      'name': 'Roma',
      'location': [41.890431, 12.491947]
    },
    {
      'name': 'Roma',
      'location': [41.890436, 12.491356]
    },
    {
      'name': 'Roma',
      'location': [41.890475, 12.492381]
    },
    {
      'name': 'Roma',
      'location': [41.890486, 12.492094]
    },
    {
      'name': 'Roma',
      'location': [41.890489, 12.492156]
    },
    {
      'name': 'Roma',
      'location': [41.890500, 12.493328]
    },
    {
      'name': 'Roma',
      'location': [41.890503, 12.491369]
    },
    {
      'name': 'Roma',
      'location': [41.890508, 12.492439]
    },
    {
      'name': 'Roma',
      'location': [41.890536, 12.493425]
    },
    {
      'name': 'Roma',
      'location': [41.890553, 12.491522]
    },
    {
      'name': 'Roma',
      'location': [41.890569, 12.491322]
    },
    {
      'name': 'Roma',
      'location': [41.890572, 12.491436]
    },
    {
      'name': 'Roma',
      'location': [41.890578, 12.488575]
    },
    {
      'name': 'Roma',
      'location': [41.890603, 12.488653]
    },
    {
      'name': 'Roma',
      'location': [41.890611, 12.491572]
    },
    {
      'name': 'Roma',
      'location': [41.890625, 12.488678]
    },
    {
      'name': 'Roma',
      'location': [41.890639, 12.492606]
    },
    {
      'name': 'Roma',
      'location': [41.890650, 12.488089]
    },
    {
      'name': 'Roma',
      'location': [41.890658, 12.490672]
    },
    {
      'name': 'Roma',
      'location': [41.890667, 12.487208]
    },
    {
      'name': 'Roma',
      'location': [41.890675, 12.492486]
    },
    {
      'name': 'Roma',
      'location': [41.890681, 12.492581]
    },
    {
      'name': 'Roma',
      'location': [41.890683, 12.492642]
    },
    {
      'name': 'Roma',
      'location': [41.890694, 12.492517]
    },
    {
      'name': 'Roma',
      'location': [41.890714, 12.488456]
    },
    {
      'name': 'Roma',
      'location': [41.890733, 12.492517]
    },
    {
      'name': 'Roma',
      'location': [41.890767, 12.492558]
    },
    {
      'name': 'Roma',
      'location': [41.890839, 12.488550]
    },
    {
      'name': 'Roma',
      'location': [41.890867, 12.492875]
    },
    {
      'name': 'Roma',
      'location': [41.890900, 12.487042]
    },
    {
      'name': 'Roma',
      'location': [41.891014, 12.491158]
    },
    {
      'name': 'Roma',
      'location': [41.891028, 12.491278]
    },
    {
      'name': 'Roma',
      'location': [41.891439, 12.487622]
    },
    {
      'name': 'Roma',
      'location': [41.891611, 12.489786]
    },
    {
      'name': 'Roma',
      'location': [41.891617, 12.487228]
    },
    {
      'name': 'Roma',
      'location': [41.891703, 12.489617]
    },
    {
      'name': 'Roma',
      'location': [41.891753, 12.486031]
    },
    {
      'name': 'Roma',
      'location': [41.891756, 12.486064]
    },
    {
      'name': 'Roma',
      'location': [41.891772, 12.486558]
    },
    {
      'name': 'Roma',
      'location': [41.891778, 12.489508]
    },
    {
      'name': 'Roma',
      'location': [41.891800, 12.486808]
    },
    {
      'name': 'Roma',
      'location': [41.891864, 12.489361]
    },
    {
      'name': 'Roma',
      'location': [41.891956, 12.485747]
    },
    {
      'name': 'Roma',
      'location': [41.891958, 12.485817]
    },
    {
      'name': 'Roma',
      'location': [41.891967, 12.485822]
    },
    {
      'name': 'Roma',
      'location': [41.891992, 12.485528]
    },
    {
      'name': 'Roma',
      'location': [41.892031, 12.485461]
    },
    {
      'name': 'Roma',
      'location': [41.892044, 12.485425]
    },
    {
      'name': 'Roma',
      'location': [41.892050, 12.486222]
    },
    {
      'name': 'Roma',
      'location': [41.892094, 12.486433]
    },
    {
      'name': 'Roma',
      'location': [41.892097, 12.485308]
    },
    {
      'name': 'Roma',
      'location': [41.892122, 12.485972]
    },
    {
      'name': 'Roma',
      'location': [41.892128, 12.486189]
    },
    {
      'name': 'Roma',
      'location': [41.892153, 12.485136]
    },
    {
      'name': 'Roma',
      'location': [41.892244, 12.486511]
    },
    {
      'name': 'Roma',
      'location': [41.892275, 12.486575]
    },
    {
      'name': 'Roma',
      'location': [41.892419, 12.485594]
    },
    {
      'name': 'Roma',
      'location': [41.892469, 12.486817]
    },
    {
      'name': 'Roma',
      'location': [41.892558, 12.485325]
    },
    {
      'name': 'Roma',
      'location': [41.892606, 12.486914]
    },
    {
      'name': 'Roma',
      'location': [41.892642, 12.485233]
    },
    {
      'name': 'Roma',
      'location': [41.892650, 12.485144]
    },
    {
      'name': 'Roma',
      'location': [41.892856, 12.482983]
    },
    {
      'name': 'Roma',
      'location': [41.892914, 12.483003]
    },
    {
      'name': 'Roma',
      'location': [41.892969, 12.483019]
    },
    {
      'name': 'Roma',
      'location': [41.893044, 12.483031]
    },
    {
      'name': 'Roma',
      'location': [41.893183, 12.483225]
    },
    {
      'name': 'Roma',
      'location': [41.893214, 12.483036]
    },
    {
      'name': 'Roma',
      'location': [41.893219, 12.483103]
    },
    {
      'name': 'Roma',
      'location': [41.893233, 12.483311]
    },
    {
      'name': 'Roma',
      'location': [41.893267, 12.483386]
    },
    {
      'name': 'Roma',
      'location': [41.893272, 12.483408]
    },
    {
      'name': 'Roma',
      'location': [41.893286, 12.483339]
    },
    {
      'name': 'Roma',
      'location': [41.893336, 12.486525]
    },
    {
      'name': 'Roma',
      'location': [41.893378, 12.486422]
    },
    {
      'name': 'Roma',
      'location': [41.893469, 12.483744]
    },
    {
      'name': 'Roma',
      'location': [41.893525, 12.483842]
    },
    {
      'name': 'Roma',
      'location': [41.893592, 12.486092]
    },
    {
      'name': 'Roma',
      'location': [41.893819, 12.485606]
    },
    {
      'name': 'Roma',
      'location': [41.893925, 12.483817]
    },
    {
      'name': 'Roma',
      'location': [41.894064, 12.485500]
    },
    {
      'name': 'Roma',
      'location': [41.894383, 12.483939]
    },
    {
      'name': 'Roma',
      'location': [41.894453, 12.483972]
    },
    {
      'name': 'Roma',
      'location': [41.894456, 12.483964]
    },
    {
      'name': 'Roma',
      'location': [41.894461, 12.483967]
    },
    {
      'name': 'Roma',
      'location': [41.894675, 12.483375]
    },
    {
      'name': 'Roma',
      'location': [41.894681, 12.482519]
    },
    {
      'name': 'Roma',
      'location': [41.894683, 12.482572]
    },
    {
      'name': 'Roma',
      'location': [41.894822, 12.483736]
    },
    {
      'name': 'Roma',
      'location': [41.894836, 12.482439]
    },
    {
      'name': 'Roma',
      'location': [41.894850, 12.483050]
    },
    {
      'name': 'Roma',
      'location': [41.894861, 12.483067]
    },
    {
      'name': 'Roma',
      'location': [41.894889, 12.479319]
    },
    {
      'name': 'Roma',
      'location': [41.894981, 12.482811]
    },
    {
      'name': 'Roma',
      'location': [41.895031, 12.482906]
    },
    {
      'name': 'Roma',
      'location': [41.895072, 12.482739]
    },
    {
      'name': 'Roma',
      'location': [41.895078, 12.482778]
    },
    {
      'name': 'Roma',
      'location': [41.895128, 12.482961]
    },
    {
      'name': 'Roma',
      'location': [41.895150, 12.482658]
    },
    {
      'name': 'Roma',
      'location': [41.895192, 12.482717]
    },
    {
      'name': 'Roma',
      'location': [41.895233, 12.482633]
    },
    {
      'name': 'Roma',
      'location': [41.895278, 12.479011]
    },
    {
      'name': 'Roma',
      'location': [41.895342, 12.484456]
    },
    {
      'name': 'Roma',
      'location': [41.895394, 12.484247]
    },
    {
      'name': 'Roma',
      'location': [41.895525, 12.484069]
    },
    {
      'name': 'Roma',
      'location': [41.895547, 12.483083]
    },
    {
      'name': 'Roma',
      'location': [41.895611, 12.484033]
    },
    {
      'name': 'Roma',
      'location': [41.895672, 12.482278]
    },
    {
      'name': 'Roma',
      'location': [41.895728, 12.478903]
    },
    {
      'name': 'Roma',
      'location': [41.895747, 12.478908]
    },
    {
      'name': 'Roma',
      'location': [41.895764, 12.478911]
    },
    {
      'name': 'Roma',
      'location': [41.895769, 12.478914]
    },
    {
      'name': 'Roma',
      'location': [41.895775, 12.483750]
    },
    {
      'name': 'Roma',
      'location': [41.895781, 12.478917]
    },
    {
      'name': 'Roma',
      'location': [41.895783, 12.478917]
    },
    {
      'name': 'Roma',
      'location': [41.895792, 12.478919]
    },
    {
      'name': 'Roma',
      'location': [41.895800, 12.478922]
    },
    {
      'name': 'Roma',
      'location': [41.895806, 12.478975]
    },
    {
      'name': 'Roma',
      'location': [41.895828, 12.478928]
    },
    {
      'name': 'Roma',
      'location': [41.895836, 12.478931]
    },
    {
      'name': 'Roma',
      'location': [41.895842, 12.478931]
    },
    {
      'name': 'Roma',
      'location': [41.895864, 12.478936]
    },
    {
      'name': 'Roma',
      'location': [41.895869, 12.478939]
    },
    {
      'name': 'Roma',
      'location': [41.895875, 12.478939]
    },
    {
      'name': 'Roma',
      'location': [41.895878, 12.478942]
    },
    {
      'name': 'Roma',
      'location': [41.896731, 12.481325]
    },
    {
      'name': 'Roma',
      'location': [41.896803, 12.481508]
    },
    {
      'name': 'Roma',
      'location': [41.898844, 12.476769]
    },
    {
      'name': 'Roma',
      'location': [41.898847, 12.476789]
    },
    {
      'name': 'Roma',
      'location': [41.898850, 12.476814]
    },
    {
      'name': 'Roma',
      'location': [41.898853, 12.476822]
    },
    {
      'name': 'Roma',
      'location': [41.898856, 12.476844]
    },
    {
      'name': 'Roma',
      'location': [41.898861, 12.476872]
    },
    {
      'name': 'Roma',
      'location': [41.898864, 12.476883]
    },
    {
      'name': 'Roma',
      'location': [41.898867, 12.476908]
    },
    {
      'name': 'Roma',
      'location': [41.898869, 12.476919]
    },
    {
      'name': 'Roma',
      'location': [41.898872, 12.476933]
    },
    {
      'name': 'Roma',
      'location': [41.898878, 12.476975]
    },
    {
      'name': 'Roma',
      'location': [41.898881, 12.476992]
    },
    {
      'name': 'Roma',
      'location': [41.899033, 12.476725]
    },
    {
      'name': 'Roma',
      'location': [41.899147, 12.476747]
    },
    {
      'name': 'Roma',
      'location': [41.899203, 12.473158]
    },
    {
      'name': 'Roma',
      'location': [41.899208, 12.476744]
    },
    {
      'name': 'Roma',
      'location': [41.899225, 12.477147]
    },
    {
      'name': 'Roma',
      'location': [41.899231, 12.476519]
    },
    {
      'name': 'Roma',
      'location': [41.899239, 12.474953]
    },
    {
      'name': 'Roma',
      'location': [41.899247, 12.477028]
    },
    {
      'name': 'Roma',
      'location': [41.899264, 12.476736]
    },
    {
      'name': 'Roma',
      'location': [41.899267, 12.476747]
    },
    {
      'name': 'Roma',
      'location': [41.899278, 12.476619]
    },
    {
      'name': 'Roma',
      'location': [41.899286, 12.476672]
    },
    {
      'name': 'Roma',
      'location': [41.899311, 12.473197]
    },
    {
      'name': 'Roma',
      'location': [41.899361, 12.476856]
    },
    {
      'name': 'Roma',
      'location': [41.899436, 12.477014]
    },
    {
      'name': 'Roma',
      'location': [41.899503, 12.476153]
    },
    {
      'name': 'Roma',
      'location': [41.899531, 12.474850]
    },
    {
      'name': 'Roma',
      'location': [41.899539, 12.476714]
    },
    {
      'name': 'Roma',
      'location': [41.899606, 12.453622]
    },
    {
      'name': 'Roma',
      'location': [41.899764, 12.473194]
    },
    {
      'name': 'Roma',
      'location': [41.899767, 12.473078]
    },
    {
      'name': 'Roma',
      'location': [41.899844, 12.472889]
    },
    {
      'name': 'Roma',
      'location': [41.899875, 12.472864]
    },
    {
      'name': 'Roma',
      'location': [41.899892, 12.472897]
    },
    {
      'name': 'Roma',
      'location': [41.899906, 12.472875]
    },
    {
      'name': 'Roma',
      'location': [41.899994, 12.476569]
    },
    {
      'name': 'Roma',
      'location': [41.900539, 12.480264]
    },
    {
      'name': 'Roma',
      'location': [41.900617, 12.478894]
    },
    {
      'name': 'Roma',
      'location': [41.900619, 12.478917]
    },
    {
      'name': 'Roma',
      'location': [41.900639, 12.479733]
    },
    {
      'name': 'Roma',
      'location': [41.900656, 12.479769]
    },
    {
      'name': 'Roma',
      'location': [41.900744, 12.478822]
    },
    {
      'name': 'Roma',
      'location': [41.900769, 12.479769]
    },
    {
      'name': 'Roma',
      'location': [41.900847, 12.476586]
    },
    {
      'name': 'Roma',
      'location': [41.900906, 12.478603]
    },
    {
      'name': 'Roma',
      'location': [41.900928, 12.480219]
    },
    {
      'name': 'Roma',
      'location': [41.900939, 12.464772]
    },
    {
      'name': 'Roma',
      'location': [41.900942, 12.478672]
    },
    {
      'name': 'Roma',
      'location': [41.900953, 12.465078]
    },
    {
      'name': 'Roma',
      'location': [41.900975, 12.464731]
    },
    {
      'name': 'Roma',
      'location': [41.900981, 12.464708]
    },
    {
      'name': 'Roma',
      'location': [41.900986, 12.464456]
    },
    {
      'name': 'Roma',
      'location': [41.900997, 12.464447]
    },
    {
      'name': 'Roma',
      'location': [41.901050, 12.479928]
    },
    {
      'name': 'Roma',
      'location': [41.901061, 12.464519]
    },
    {
      'name': 'Roma',
      'location': [41.901125, 12.464500]
    },
    {
      'name': 'Roma',
      'location': [41.901172, 12.465569]
    },
    {
      'name': 'Roma',
      'location': [41.901225, 12.480564]
    },
    {
      'name': 'Roma',
      'location': [41.901242, 12.464394]
    },
    {
      'name': 'Roma',
      'location': [41.901247, 12.465819]
    },
    {
      'name': 'Roma',
      'location': [41.901331, 12.480675]
    },
    {
      'name': 'Roma',
      'location': [41.901350, 12.464231]
    },
    {
      'name': 'Roma',
      'location': [41.901389, 12.464175]
    },
    {
      'name': 'Roma',
      'location': [41.901506, 12.466467]
    },
    {
      'name': 'Roma',
      'location': [41.901653, 12.464003]
    },
    {
      'name': 'Roma',
      'location': [41.901694, 12.466419]
    },
    {
      'name': 'Roma',
      'location': [41.901714, 12.466475]
    },
    {
      'name': 'Roma',
      'location': [41.901906, 12.456636]
    },
    {
      'name': 'Roma',
      'location': [41.901989, 12.466458]
    },
    {
      'name': 'Roma',
      'location': [41.902008, 12.456600]
    },
    {
      'name': 'Roma',
      'location': [41.902050, 12.472178]
    },
    {
      'name': 'Roma',
      'location': [41.902069, 12.466433]
    },
    {
      'name': 'Roma',
      'location': [41.902075, 12.472147]
    },
    {
      'name': 'Roma',
      'location': [41.902092, 12.458389]
    },
    {
      'name': 'Roma',
      'location': [41.902108, 12.458361]
    },
    {
      'name': 'Roma',
      'location': [41.902117, 12.458378]
    },
    {
      'name': 'Roma',
      'location': [41.902119, 12.458375]
    },
    {
      'name': 'Roma',
      'location': [41.902122, 12.458358]
    },
    {
      'name': 'Roma',
      'location': [41.902142, 12.471614]
    },
    {
      'name': 'Roma',
      'location': [41.902189, 12.471536]
    },
    {
      'name': 'Roma',
      'location': [41.902200, 12.471525]
    },
    {
      'name': 'Roma',
      'location': [41.902203, 12.471531]
    },
    {
      'name': 'Roma',
      'location': [41.902214, 12.460808]
    },
    {
      'name': 'Roma',
      'location': [41.902225, 12.466428]
    },
    {
      'name': 'Roma',
      'location': [41.902247, 12.471581]
    },
    {
      'name': 'Roma',
      'location': [41.902272, 12.461603]
    },
    {
      'name': 'Roma',
      'location': [41.902283, 12.458364]
    },
    {
      'name': 'Roma',
      'location': [41.902303, 12.471467]
    },
    {
      'name': 'Roma',
      'location': [41.902336, 12.463875]
    },
    {
      'name': 'Roma',
      'location': [41.902339, 12.466389]
    },
    {
      'name': 'Roma',
      'location': [41.902344, 12.479272]
    },
    {
      'name': 'Roma',
      'location': [41.902361, 12.457814]
    },
    {
      'name': 'Roma',
      'location': [41.902364, 12.479119]
    },
    {
      'name': 'Roma',
      'location': [41.902372, 12.457733]
    },
    {
      'name': 'Roma',
      'location': [41.902414, 12.466386]
    },
    {
      'name': 'Roma',
      'location': [41.902439, 12.466336]
    },
    {
      'name': 'Roma',
      'location': [41.902461, 12.466217]
    },
    {
      'name': 'Roma',
      'location': [41.902464, 12.479244]
    },
    {
      'name': 'Roma',
      'location': [41.902469, 12.466194]
    },
    {
      'name': 'Roma',
      'location': [41.902475, 12.457850]
    },
    {
      'name': 'Roma',
      'location': [41.902481, 12.457850]
    },
    {
      'name': 'Roma',
      'location': [41.902489, 12.466014]
    },
    {
      'name': 'Roma',
      'location': [41.902506, 12.465672]
    },
    {
      'name': 'Roma',
      'location': [41.902553, 12.459669]
    },
    {
      'name': 'Roma',
      'location': [41.902589, 12.466386]
    },
    {
      'name': 'Roma',
      'location': [41.902597, 12.457703]
    },
    {
      'name': 'Roma',
      'location': [41.902603, 12.456486]
    },
    {
      'name': 'Roma',
      'location': [41.902606, 12.457703]
    },
    {
      'name': 'Roma',
      'location': [41.902614, 12.456500]
    },
    {
      'name': 'Roma',
      'location': [41.902622, 12.456456]
    },
    {
      'name': 'Roma',
      'location': [41.902631, 12.456464]
    },
    {
      'name': 'Roma',
      'location': [41.902633, 12.456500]
    },
    {
      'name': 'Roma',
      'location': [41.902636, 12.456475]
    },
    {
      'name': 'Roma',
      'location': [41.902642, 12.456453]
    },
    {
      'name': 'Roma',
      'location': [41.902644, 12.456450]
    },
    {
      'name': 'Roma',
      'location': [41.902650, 12.456475]
    },
    {
      'name': 'Roma',
      'location': [41.902653, 12.456511]
    },
    {
      'name': 'Roma',
      'location': [41.902658, 12.456483]
    },
    {
      'name': 'Roma',
      'location': [41.902669, 12.456564]
    },
    {
      'name': 'Roma',
      'location': [41.902675, 12.456519]
    },
    {
      'name': 'Roma',
      'location': [41.902678, 12.457564]
    },
    {
      'name': 'Roma',
      'location': [41.902681, 12.456514]
    },
    {
      'name': 'Roma',
      'location': [41.902683, 12.456475]
    },
    {
      'name': 'Roma',
      'location': [41.902686, 12.465725]
    },
    {
      'name': 'Roma',
      'location': [41.902689, 12.457031]
    },
    {
      'name': 'Roma',
      'location': [41.902692, 12.456492]
    },
    {
      'name': 'Roma',
      'location': [41.902694, 12.456586]
    },
    {
      'name': 'Roma',
      'location': [41.902697, 12.457189]
    },
    {
      'name': 'Roma',
      'location': [41.902700, 12.457192]
    },
    {
      'name': 'Roma',
      'location': [41.902703, 12.456483]
    },
    {
      'name': 'Roma',
      'location': [41.902706, 12.457397]
    },
    {
      'name': 'Roma',
      'location': [41.902708, 12.456983]
    },
    {
      'name': 'Roma',
      'location': [41.902711, 12.466094]
    },
    {
      'name': 'Roma',
      'location': [41.902717, 12.456467]
    },
    {
      'name': 'Roma',
      'location': [41.902719, 12.456903]
    },
    {
      'name': 'Roma',
      'location': [41.902722, 12.456511]
    },
    {
      'name': 'Roma',
      'location': [41.902728, 12.465739]
    },
    {
      'name': 'Roma',
      'location': [41.902733, 12.465742]
    },
    {
      'name': 'Roma',
      'location': [41.902736, 12.456717]
    },
    {
      'name': 'Roma',
      'location': [41.902739, 12.456483]
    },
    {
      'name': 'Roma',
      'location': [41.902742, 12.456683]
    },
    {
      'name': 'Roma',
      'location': [41.902744, 12.466117]
    },
    {
      'name': 'Roma',
      'location': [41.902747, 12.456464]
    },
    {
      'name': 'Roma',
      'location': [41.902750, 12.456467]
    },
    {
      'name': 'Roma',
      'location': [41.902753, 12.466225]
    },
    {
      'name': 'Roma',
      'location': [41.902756, 12.466411]
    },
    {
      'name': 'Roma',
      'location': [41.902758, 12.457417]
    },
    {
      'name': 'Roma',
      'location': [41.902761, 12.457228]
    },
    {
      'name': 'Roma',
      'location': [41.902764, 12.457900]
    },
    {
      'name': 'Roma',
      'location': [41.902767, 12.457317]
    },
    {
      'name': 'Roma',
      'location': [41.902775, 12.465986]
    },
    {
      'name': 'Roma',
      'location': [41.902778, 12.466386]
    },
    {
      'name': 'Roma',
      'location': [41.902781, 12.466644]
    },
    {
      'name': 'Roma',
      'location': [41.902786, 12.466400]
    },
    {
      'name': 'Roma',
      'location': [41.902792, 12.456822]
    },
    {
      'name': 'Roma',
      'location': [41.902800, 12.465764]
    },
    {
      'name': 'Roma',
      'location': [41.902803, 12.457364]
    },
    {
      'name': 'Roma',
      'location': [41.902806, 12.466389]
    },
    {
      'name': 'Roma',
      'location': [41.902808, 12.466303]
    },
    {
      'name': 'Roma',
      'location': [41.902814, 12.466392]
    },
    {
      'name': 'Roma',
      'location': [41.902819, 12.466294]
    },
    {
      'name': 'Roma',
      'location': [41.902825, 12.457303]
    },
    {
      'name': 'Roma',
      'location': [41.902828, 12.466467]
    },
    {
      'name': 'Roma',
      'location': [41.902831, 12.465775]
    },
    {
      'name': 'Roma',
      'location': [41.902847, 12.466406]
    },
    {
      'name': 'Roma',
      'location': [41.902867, 12.457211]
    },
    {
      'name': 'Roma',
      'location': [41.902869, 12.466464]
    },
    {
      'name': 'Roma',
      'location': [41.902886, 12.466203]
    },
    {
      'name': 'Roma',
      'location': [41.902903, 12.466344]
    },
    {
      'name': 'Roma',
      'location': [41.902906, 12.466192]
    },
    {
      'name': 'Roma',
      'location': [41.902911, 12.466331]
    },
    {
      'name': 'Roma',
      'location': [41.902922, 12.466244]
    },
    {
      'name': 'Roma',
      'location': [41.902967, 12.466200]
    },
    {
      'name': 'Roma',
      'location': [41.902992, 12.457111]
    },
    {
      'name': 'Roma',
      'location': [41.902994, 12.466233]
    },
    {
      'name': 'Roma',
      'location': [41.903011, 12.465839]
    },
    {
      'name': 'Roma',
      'location': [41.903017, 12.466189]
    },
    {
      'name': 'Roma',
      'location': [41.903022, 12.466117]
    },
    {
      'name': 'Roma',
      'location': [41.903044, 12.466225]
    },
    {
      'name': 'Roma',
      'location': [41.903061, 12.466292]
    },
    {
      'name': 'Roma',
      'location': [41.903111, 12.466219]
    },
    {
      'name': 'Roma',
      'location': [41.903136, 12.466183]
    },
    {
      'name': 'Roma',
      'location': [41.903147, 12.466267]
    },
    {
      'name': 'Roma',
      'location': [41.903161, 12.466439]
    },
    {
      'name': 'Roma',
      'location': [41.903217, 12.466436]
    },
    {
      'name': 'Roma',
      'location': [41.903253, 12.466361]
    },
    {
      'name': 'Roma',
      'location': [41.903306, 12.466217]
    },
    {
      'name': 'Roma',
      'location': [41.903392, 12.466519]
    },
    {
      'name': 'Roma',
      'location': [41.903419, 12.466378]
    },
    {
      'name': 'Roma',
      'location': [41.903519, 12.456078]
    },
    {
      'name': 'Roma',
      'location': [41.903622, 12.479256]
    },
    {
      'name': 'Roma',
      'location': [41.903775, 12.479208]
    },
    {
      'name': 'Roma',
      'location': [41.903822, 12.479197]
    },
    {
      'name': 'Roma',
      'location': [41.903883, 12.479181]
    },
    {
      'name': 'Roma',
      'location': [41.904119, 12.455567]
    },
    {
      'name': 'Roma',
      'location': [41.904711, 12.455425]
    },
    {
      'name': 'Roma',
      'location': [41.904925, 12.483025]
    },
    {
      'name': 'Roma',
      'location': [41.905097, 12.482764]
    },
    {
      'name': 'Roma',
      'location': [41.905147, 12.482725]
    },
    {
      'name': 'Roma',
      'location': [41.905169, 12.482733]
    },
    {
      'name': 'Roma',
      'location': [41.905203, 12.475281]
    },
    {
      'name': 'Roma',
      'location': [41.905236, 12.475219]
    },
    {
      'name': 'Roma',
      'location': [41.905347, 12.482458]
    },
    {
      'name': 'Roma',
      'location': [41.905428, 12.481294]
    },
    {
      'name': 'Roma',
      'location': [41.905583, 12.475419]
    },
    {
      'name': 'Roma',
      'location': [41.905633, 12.482250]
    },
    {
      'name': 'Roma',
      'location': [41.905803, 12.482264]
    },
    {
      'name': 'Roma',
      'location': [41.905828, 12.482403]
    },
    {
      'name': 'Roma',
      'location': [41.910108, 12.476736]
    },
    {
      'name': 'Roma',
      'location': [41.910111, 12.477153]
    },
    {
      'name': 'Roma',
      'location': [41.910117, 12.476628]
    },
    {
      'name': 'Roma',
      'location': [41.910178, 12.477228]
    },
    {
      'name': 'Roma',
      'location': [41.910250, 12.476517]
    },
    {
      'name': 'Roma',
      'location': [41.910264, 12.476536]
    },
    {
      'name': 'Roma',
      'location': [41.910283, 12.476503]
    },
    {
      'name': 'Roma',
      'location': [41.910539, 12.475614]
    },
    {
      'name': 'Roma',
      'location': [41.910703, 12.476469]
    },
    {
      'name': 'Roma',
      'location': [41.910733, 12.476750]
    },
    {
      'name': 'Roma',
      'location': [41.910739, 12.476689]
    },
    {
      'name': 'Roma',
      'location': [41.910861, 12.476019]
    },
    {
      'name': 'Roma',
      'location': [41.911069, 12.476072]
    },
    {
      'name': 'Roma',
      'location': [41.911147, 12.476075]
    },
    {
      'name': 'Roma',
      'location': [41.911314, 12.476097]
    },
    {
      'name': 'Roma',
      'location': [41.911422, 12.476139]
    },
    {
      'name': 'Roma',
      'location': [41.911456, 12.476050]
    },
    {
      'name': 'Roma',
      'location': [41.911517, 12.475933]
    },
    {
      'name': 'Roma',
      'location': [41.912125, 12.477014]
    },
    {
      'name': 'Girona',
      'location': [41.987094, 2.826325]
    },
    {
      'name': 'Girona',
      'location': [41.987325, 2.825514]
    },
    {
      'name': 'Girona',
      'location': [41.987428, 2.825867]
    },
    {
      'name': 'Girona',
      'location': [41.987806, 2.825675]
    },
    {
      'name': 'Girona',
      'location': [41.987883, 2.825858]
    },
    {
      'name': 'Girona',
      'location': [41.988061, 2.823383]
    },
    {
      'name': 'La Torre de Dalt',
      'location': [42.082383, 2.773575]
    },
    {
      'name': 'Banyoles',
      'location': [42.133283, 2.759772]
    },
    {
      'name': 'Besalú',
      'location': [42.198714, 2.703339]
    },
    {
      'name': 'Vigo',
      'location': [42.231731, -8.726472]
    },
    {
      'name': 'Vigo',
      'location': [42.234394, -8.726872]
    },
    {
      'name': 'Vigo',
      'location': [42.236350, -8.721469]
    },
    {
      'name': 'Vigo',
      'location': [42.239569, -8.720667]
    },
    {
      'name': 'Vigo',
      'location': [42.240511, -8.721572]
    },
    {
      'name': 'Vigo',
      'location': [42.240744, -8.721942]
    },
    {
      'name': 'Vigo',
      'location': [42.241078, -8.721533]
    },
    {
      'name': 'San Clodio',
      'location': [42.367342, -8.115275]
    },
    {
      'name': 'Cañons do Sil',
      'location': [42.387319, -7.505250]
    },
    {
      'name': 'Cañons do Sil',
      'location': [42.407633, -7.641689]
    },
    {
      'name': 'Cañons do Sil',
      'location': [42.407753, -7.642486]
    },
    {
      'name': 'Mosteiro de San Estevo',
      'location': [42.417058, -7.685950]
    },
    {
      'name': 'Mosteiro de San Estevo',
      'location': [42.417106, -7.685836]
    },
    {
      'name': 'Mosteiro de San Estevo',
      'location': [42.417372, -7.685408]
    },
    {
      'name': 'Mosteiro de San Estevo',
      'location': [42.417550, -7.686014]
    },
    {
      'name': 'Mosteiro de San Estevo',
      'location': [42.417558, -7.685503]
    },
    {
      'name': 'Mosteiro de San Estevo',
      'location': [42.417681, -7.686031]
    },
    {
      'name': 'Pontevedra',
      'location': [42.485975, -8.844617]
    },
    {
      'name': 'Santa Uxía de Ribeira',
      'location': [42.552069, -8.986488]
    },
    {
      'name': 'Santa Uxía de Ribeira',
      'location': [42.554994, -8.993194]
    },
    {
      'name': 'Santa Uxía de Ribeira',
      'location': [42.555125, -8.993042]
    },
    {
      'name': 'Santa Uxía de Ribeira',
      'location': [42.555486, -8.989514]
    },
    {
      'name': 'Santa Uxía de Ribeira',
      'location': [42.555497, -8.990175]
    },
    {
      'name': 'Santa Uxía de Ribeira',
      'location': [42.556347, -8.991611]
    },
    {
      'name': 'Monte Ciudad',
      'location': [42.559911, -9.015939]
    },
    {
      'name': 'San Roque',
      'location': [42.561906, -9.018542]
    },
    {
      'name': 'Pontevedra',
      'location': [42.563369, -8.868258]
    },
    {
      'name': 'Dunas de Corrubedo',
      'location': [42.572678, -9.045928]
    },
    {
      'name': 'Dunas de Corrubedo',
      'location': [42.573478, -9.047708]
    },
    {
      'name': 'Dunas de Corrubedo',
      'location': [42.574228, -9.044900]
    },
    {
      'name': 'Dunas de Corrubedo',
      'location': [42.575019, -9.044219]
    },
    {
      'name': 'Faro de Corrubedo',
      'location': [42.575975, -9.091089]
    },
    {
      'name': 'Dunas de Corrubedo',
      'location': [42.584447, -9.045019]
    },
    {
      'name': 'Dolmen de Axeitos',
      'location': [42.600300, -9.017519]
    },
    {
      'name': 'A Pobra do Caramiñal',
      'location': [42.606267, -8.935419]
    },
    {
      'name': 'A Pobra do Caramiñal',
      'location': [42.606542, -8.937058]
    },
    {
      'name': 'A Pobra do Caramiñal',
      'location': [42.606669, -8.935369]
    },
    {
      'name': 'A Pobra do Caramiñal',
      'location': [42.606903, -8.935356]
    },
    {
      'name': 'Catoira',
      'location': [42.676433, -8.725789]
    },
    {
      'name': 'Catoira',
      'location': [42.676533, -8.720256]
    },
    {
      'name': 'Catoira',
      'location': [42.676833, -8.725064]
    },
    {
      'name': 'Catoira',
      'location': [42.677200, -8.725478]
    },
    {
      'name': 'Catoira',
      'location': [42.677236, -8.724222]
    },
    {
      'name': 'Catoira',
      'location': [42.677244, -8.724725]
    },
    {
      'name': 'Catoira',
      'location': [42.677375, -8.724956]
    },
    {
      'name': 'Catoira',
      'location': [42.677539, -8.724303]
    },
    {
      'name': 'Costa da Morte',
      'location': [42.694578, -9.030558]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.873933, -8.543378]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.874694, -8.549239]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.875192, -8.549408]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.876831, -8.548139]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.877339, -8.546303]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.877364, -8.546583]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.879333, -8.545439]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.879339, -8.545425]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.879342, -8.545419]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.879939, -8.544264]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880011, -8.544247]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880025, -8.544411]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880089, -8.545508]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880094, -8.544369]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880189, -8.544178]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880214, -8.544381]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880222, -8.545656]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880292, -8.544406]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880347, -8.545858]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880403, -8.545711]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880406, -8.545731]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880425, -8.545361]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880447, -8.545364]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880450, -8.545703]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880483, -8.543794]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880489, -8.543831]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880503, -8.545683]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880525, -8.545428]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880533, -8.544786]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880539, -8.544458]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880567, -8.544792]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880569, -8.544222]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880619, -8.544903]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880622, -8.544903]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880708, -8.543531]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880750, -8.546050]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880772, -8.546114]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880792, -8.544819]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880808, -8.543542]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880825, -8.546264]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880847, -8.546058]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880867, -8.543525]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880922, -8.545919]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880967, -8.545961]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.880997, -8.544186]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.881017, -8.545978]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.881025, -8.544228]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.881144, -8.542675]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.881267, -8.543983]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.881283, -8.544314]
    },
    {
      'name': 'Fisterra',
      'location': [42.881922, -9.272039]
    },
    {
      'name': 'Fisterra',
      'location': [42.882081, -9.271950]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.882247, -8.543669]
    },
    {
      'name': 'Fisterra',
      'location': [42.882644, -9.271958]
    },
    {
      'name': 'Fisterra',
      'location': [42.884358, -9.271736]
    },
    {
      'name': 'Santiago de Compostela',
      'location': [42.888519, -8.532425]
    },
    {
      'name': 'Corcubión',
      'location': [42.944053, -9.189617]
    },
    {
      'name': 'Corcubión',
      'location': [42.944925, -9.190931]
    },
    {
      'name': 'Corcubión',
      'location': [42.945033, -9.189842]
    },
    {
      'name': 'Muxía',
      'location': [43.112681, -9.219111]
    },
    {
      'name': 'A Coruña',
      'location': [43.368631, -8.402211]
    },
    {
      'name': 'A Coruña',
      'location': [43.368664, -8.402275]
    },
    {
      'name': 'A Coruña',
      'location': [43.368781, -8.402289]
    },
    {
      'name': 'A Coruña',
      'location': [43.369572, -8.398378]
    },
    {
      'name': 'A Coruña',
      'location': [43.370492, -8.398142]
    },
    {
      'name': 'A Coruña',
      'location': [43.370697, -8.395344]
    },
    {
      'name': 'San Pedro',
      'location': [43.377681, -8.436714]
    },
    {
      'name': 'San Pedro',
      'location': [43.377911, -8.436694]
    },
    {
      'name': 'San Pedro',
      'location': [43.378517, -8.437436]
    },
    {
      'name': 'San Pedro',
      'location': [43.379039, -8.437306]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.384133, -8.402158]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.385072, -8.403050]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.385428, -8.403939]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.385961, -8.405356]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386028, -8.405739]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386056, -8.406269]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386297, -8.406894]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386372, -8.407597]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386397, -8.407031]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386400, -8.407253]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386406, -8.406989]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386456, -8.407103]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386611, -8.407494]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386642, -8.407747]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386683, -8.407600]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386694, -8.407672]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386703, -8.407733]
    },
    {
      'name': 'Torre de Hércules',
      'location': [43.386761, -8.407850]
    },
    {
      'name': 'Ribadeo',
      'location': [43.537325, -7.042750]
    },
    {
      'name': 'Gijón',
      'location': [43.540092, -5.657097]
    },
    {
      'name': 'Gijón',
      'location': [43.540708, -5.653517]
    },
    {
      'name': 'Praia das Catedrais',
      'location': [43.555081, -7.133947]
    },
    {
      'name': 'Genève',
      'location': [46.195914, 6.152431]
    },
    {
      'name': 'Genève',
      'location': [46.196275, 6.152689]
    },
    {
      'name': 'Genève',
      'location': [46.196869, 6.153511]
    },
    {
      'name': 'Genève',
      'location': [46.198714, 6.153686]
    },
    {
      'name': 'Genève',
      'location': [46.198756, 6.153997]
    },
    {
      'name': 'Genève',
      'location': [46.198928, 6.154150]
    },
    {
      'name': 'Genève',
      'location': [46.199061, 6.146381]
    },
    {
      'name': 'Genève',
      'location': [46.199150, 6.153858]
    },
    {
      'name': 'Genève',
      'location': [46.199408, 6.145572]
    },
    {
      'name': 'Genève',
      'location': [46.199492, 6.145131]
    },
    {
      'name': 'Genève',
      'location': [46.199494, 6.145128]
    },
    {
      'name': 'Genève',
      'location': [46.199531, 6.151858]
    },
    {
      'name': 'Genève',
      'location': [46.200069, 6.148461]
    },
    {
      'name': 'Genève',
      'location': [46.200142, 6.148919]
    },
    {
      'name': 'Genève',
      'location': [46.200147, 6.145792]
    },
    {
      'name': 'Genève',
      'location': [46.200153, 6.143881]
    },
    {
      'name': 'Genève',
      'location': [46.200236, 6.149078]
    },
    {
      'name': 'Genève',
      'location': [46.200275, 6.149233]
    },
    {
      'name': 'Genève',
      'location': [46.200294, 6.149669]
    },
    {
      'name': 'Genève',
      'location': [46.200308, 6.149664]
    },
    {
      'name': 'Genève',
      'location': [46.200886, 6.143969]
    },
    {
      'name': 'Genève',
      'location': [46.200903, 6.149544]
    },
    {
      'name': 'Genève',
      'location': [46.200944, 6.148147]
    },
    {
      'name': 'Genève',
      'location': [46.200956, 6.143281]
    },
    {
      'name': 'Genève',
      'location': [46.200961, 6.143275]
    },
    {
      'name': 'Genève',
      'location': [46.200967, 6.143272]
    },
    {
      'name': 'Genève',
      'location': [46.200981, 6.146956]
    },
    {
      'name': 'Genève',
      'location': [46.201003, 6.148975]
    },
    {
      'name': 'Genève',
      'location': [46.201019, 6.146911]
    },
    {
      'name': 'Genève',
      'location': [46.201050, 6.146892]
    },
    {
      'name': 'Genève',
      'location': [46.201089, 6.143456]
    },
    {
      'name': 'Genève',
      'location': [46.201092, 6.146611]
    },
    {
      'name': 'Genève',
      'location': [46.201142, 6.146808]
    },
    {
      'name': 'Genève',
      'location': [46.201203, 6.146953]
    },
    {
      'name': 'Genève',
      'location': [46.201256, 6.150058]
    },
    {
      'name': 'Genève',
      'location': [46.201294, 6.147128]
    },
    {
      'name': 'Genève',
      'location': [46.201458, 6.144200]
    },
    {
      'name': 'Genève',
      'location': [46.201478, 6.149094]
    },
    {
      'name': 'Genève',
      'location': [46.201578, 6.149197]
    },
    {
      'name': 'Genève',
      'location': [46.201786, 6.149047]
    },
    {
      'name': 'Genève',
      'location': [46.201872, 6.146036]
    },
    {
      'name': 'Genève',
      'location': [46.201894, 6.149733]
    },
    {
      'name': 'Genève',
      'location': [46.202089, 6.147228]
    },
    {
      'name': 'Genève',
      'location': [46.202928, 6.147778]
    },
    {
      'name': 'Genève',
      'location': [46.203633, 6.143200]
    },
    {
      'name': 'Genève',
      'location': [46.203719, 6.143744]
    },
    {
      'name': 'Genève',
      'location': [46.204028, 6.150983]
    },
    {
      'name': 'Genève',
      'location': [46.204069, 6.152278]
    },
    {
      'name': 'Genève',
      'location': [46.204086, 6.150958]
    },
    {
      'name': 'Genève',
      'location': [46.204092, 6.152631]
    },
    {
      'name': 'Genève',
      'location': [46.204100, 6.150939]
    },
    {
      'name': 'Genève',
      'location': [46.204122, 6.148442]
    },
    {
      'name': 'Genève',
      'location': [46.204158, 6.150942]
    },
    {
      'name': 'Genève',
      'location': [46.204183, 6.153369]
    },
    {
      'name': 'Genève',
      'location': [46.204186, 6.153231]
    },
    {
      'name': 'Genève',
      'location': [46.204264, 6.153908]
    },
    {
      'name': 'Genève',
      'location': [46.204267, 6.149561]
    },
    {
      'name': 'Genève',
      'location': [46.204414, 6.152775]
    },
    {
      'name': 'Genève',
      'location': [46.204503, 6.151222]
    },
    {
      'name': 'Genève',
      'location': [46.204519, 6.152508]
    },
    {
      'name': 'Genève',
      'location': [46.204636, 6.154850]
    },
    {
      'name': 'Genève',
      'location': [46.204639, 6.151378]
    },
    {
      'name': 'Genève',
      'location': [46.204647, 6.154850]
    },
    {
      'name': 'Genève',
      'location': [46.204669, 6.154961]
    },
    {
      'name': 'Genève',
      'location': [46.204725, 6.155031]
    },
    {
      'name': 'Genève',
      'location': [46.204731, 6.155031]
    },
    {
      'name': 'Genève',
      'location': [46.204822, 6.155061]
    },
    {
      'name': 'Genève',
      'location': [46.204867, 6.151658]
    },
    {
      'name': 'Genève',
      'location': [46.204881, 6.151656]
    },
    {
      'name': 'Genève',
      'location': [46.205131, 6.156167]
    },
    {
      'name': 'Genève',
      'location': [46.205472, 6.143178]
    },
    {
      'name': 'Genève',
      'location': [46.205611, 6.156928]
    },
    {
      'name': 'Genève',
      'location': [46.205625, 6.156892]
    },
    {
      'name': 'Genève',
      'location': [46.205639, 6.156892]
    },
    {
      'name': 'Genève',
      'location': [46.205642, 6.156897]
    },
    {
      'name': 'Genève',
      'location': [46.205936, 6.157511]
    },
    {
      'name': 'Genève',
      'location': [46.206306, 6.148100]
    },
    {
      'name': 'Genève',
      'location': [46.206372, 6.147986]
    },
    {
      'name': 'Genève',
      'location': [46.206475, 6.145778]
    },
    {
      'name': 'Genève',
      'location': [46.206642, 6.147528]
    },
    {
      'name': 'Genève',
      'location': [46.206825, 6.147214]
    },
    {
      'name': 'Genève',
      'location': [46.206903, 6.147083]
    },
    {
      'name': 'Genève',
      'location': [46.207031, 6.146869]
    },
    {
      'name': 'Genève',
      'location': [46.207144, 6.159814]
    },
    {
      'name': 'Genève',
      'location': [46.207361, 6.156097]
    },
    {
      'name': 'Genève',
      'location': [46.207378, 6.146275]
    },
    {
      'name': 'Genève',
      'location': [46.207786, 6.161275]
    },
    {
      'name': 'Genève',
      'location': [46.207789, 6.161269]
    },
    {
      'name': 'Genève',
      'location': [46.208756, 6.144494]
    },
    {
      'name': 'Genève',
      'location': [46.209306, 6.143594]
    },
    {
      'name': 'Bern',
      'location': [46.946158, 7.444114]
    },
    {
      'name': 'Bern',
      'location': [46.946192, 7.444464]
    },
    {
      'name': 'Bern',
      'location': [46.946214, 7.444594]
    },
    {
      'name': 'Bern',
      'location': [46.946215, 7.444596]
    },
    {
      'name': 'Bern',
      'location': [46.946252, 7.444241]
    },
    {
      'name': 'Bern',
      'location': [46.946298, 7.444770]
    },
    {
      'name': 'Bern',
      'location': [46.946305, 7.444706]
    },
    {
      'name': 'Bern',
      'location': [46.946422, 7.444638]
    },
    {
      'name': 'Bern',
      'location': [46.946481, 7.443812]
    },
    {
      'name': 'Bern',
      'location': [46.946591, 7.443743]
    },
    {
      'name': 'Bern',
      'location': [46.946840, 7.444070]
    },
    {
      'name': 'Bern',
      'location': [46.946849, 7.444569]
    },
    {
      'name': 'Bern',
      'location': [46.946856, 7.452378]
    },
    {
      'name': 'Bern',
      'location': [46.946858, 7.452379]
    },
    {
      'name': 'Bern',
      'location': [46.946935, 7.444161]
    },
    {
      'name': 'Bern',
      'location': [46.946964, 7.448014]
    },
    {
      'name': 'Bern',
      'location': [46.946966, 7.448015]
    },
    {
      'name': 'Bern',
      'location': [46.947100, 7.444118]
    },
    {
      'name': 'Bern',
      'location': [46.947189, 7.451072]
    },
    {
      'name': 'Bern',
      'location': [46.947191, 7.451073]
    },
    {
      'name': 'Bern',
      'location': [46.947236, 7.451036]
    },
    {
      'name': 'Bern',
      'location': [46.947237, 7.451038]
    },
    {
      'name': 'Bern',
      'location': [46.947239, 7.451628]
    },
    {
      'name': 'Bern',
      'location': [46.947264, 7.451244]
    },
    {
      'name': 'Bern',
      'location': [46.947267, 7.451294]
    },
    {
      'name': 'Bern',
      'location': [46.947275, 7.451448]
    },
    {
      'name': 'Bern',
      'location': [46.947278, 7.450558]
    },
    {
      'name': 'Bern',
      'location': [46.947303, 7.452064]
    },
    {
      'name': 'Bern',
      'location': [46.947383, 7.450595]
    },
    {
      'name': 'Bern',
      'location': [46.947387, 7.450611]
    },
    {
      'name': 'Bern',
      'location': [46.947391, 7.450560]
    },
    {
      'name': 'Bern',
      'location': [46.947429, 7.449088]
    },
    {
      'name': 'Bern',
      'location': [46.947435, 7.450475]
    },
    {
      'name': 'Bern',
      'location': [46.947479, 7.449952]
    },
    {
      'name': 'Bern',
      'location': [46.947528, 7.448131]
    },
    {
      'name': 'Bern',
      'location': [46.947631, 7.443614]
    },
    {
      'name': 'Bern',
      'location': [46.947788, 7.459369]
    },
    {
      'name': 'Bern',
      'location': [46.947928, 7.446186]
    },
    {
      'name': 'Bern',
      'location': [46.947936, 7.446510]
    },
    {
      'name': 'Bern',
      'location': [46.947939, 7.448081]
    },
    {
      'name': 'Bern',
      'location': [46.947940, 7.448081]
    },
    {
      'name': 'Bern',
      'location': [46.947947, 7.446294]
    },
    {
      'name': 'Bern',
      'location': [46.947967, 7.449039]
    },
    {
      'name': 'Bern',
      'location': [46.947984, 7.447248]
    },
    {
      'name': 'Bern',
      'location': [46.947992, 7.452317]
    },
    {
      'name': 'Bern',
      'location': [46.947997, 7.445253]
    },
    {
      'name': 'Bern',
      'location': [46.948152, 7.444263]
    },
    {
      'name': 'Bern',
      'location': [46.948162, 7.444394]
    },
    {
      'name': 'Bern',
      'location': [46.948250, 7.443531]
    },
    {
      'name': 'Bern',
      'location': [46.948258, 7.439992]
    },
    {
      'name': 'Bern',
      'location': [46.948349, 7.447362]
    },
    {
      'name': 'Bern',
      'location': [46.948428, 7.458342]
    },
    {
      'name': 'Bern',
      'location': [46.948430, 7.458343]
    },
    {
      'name': 'Bern',
      'location': [46.948461, 7.452311]
    },
    {
      'name': 'Bern',
      'location': [46.948488, 7.459009]
    },
    {
      'name': 'Bern',
      'location': [46.948495, 7.458725]
    },
    {
      'name': 'Bern',
      'location': [46.948518, 7.452059]
    },
    {
      'name': 'Bern',
      'location': [46.948578, 7.457844]
    },
    {
      'name': 'Bern',
      'location': [46.948579, 7.457845]
    },
    {
      'name': 'Bern',
      'location': [46.948657, 7.443661]
    },
    {
      'name': 'Bern',
      'location': [46.948712, 7.443731]
    },
    {
      'name': 'Bern',
      'location': [46.951008, 7.460286]
    },
    {
      'name': 'Bern',
      'location': [46.951484, 7.460242]
    },
    {
      'name': 'Bern',
      'location': [46.951974, 7.459840]
    },
    {
      'name': 'Luzern',
      'location': [47.049853, 8.303264]
    },
    {
      'name': 'Luzern',
      'location': [47.049861, 8.303261]
    },
    {
      'name': 'Luzern',
      'location': [47.049867, 8.303258]
    },
    {
      'name': 'Luzern',
      'location': [47.049869, 8.303256]
    },
    {
      'name': 'Luzern',
      'location': [47.049875, 8.303164]
    },
    {
      'name': 'Luzern',
      'location': [47.049972, 8.303072]
    },
    {
      'name': 'Luzern',
      'location': [47.050019, 8.303042]
    },
    {
      'name': 'Luzern',
      'location': [47.050156, 8.303717]
    },
    {
      'name': 'Luzern',
      'location': [47.050256, 8.302814]
    },
    {
      'name': 'Luzern',
      'location': [47.050692, 8.305083]
    },
    {
      'name': 'Luzern',
      'location': [47.050708, 8.305125]
    },
    {
      'name': 'Luzern',
      'location': [47.050767, 8.305264]
    },
    {
      'name': 'Luzern',
      'location': [47.050783, 8.305275]
    },
    {
      'name': 'Luzern',
      'location': [47.050786, 8.305278]
    },
    {
      'name': 'Luzern',
      'location': [47.050789, 8.305281]
    },
    {
      'name': 'Luzern',
      'location': [47.050797, 8.305286]
    },
    {
      'name': 'Luzern',
      'location': [47.050803, 8.308756]
    },
    {
      'name': 'Luzern',
      'location': [47.050811, 8.305286]
    },
    {
      'name': 'Luzern',
      'location': [47.050819, 8.308725]
    },
    {
      'name': 'Luzern',
      'location': [47.050822, 8.305289]
    },
    {
      'name': 'Luzern',
      'location': [47.050825, 8.308686]
    },
    {
      'name': 'Luzern',
      'location': [47.050853, 8.305292]
    },
    {
      'name': 'Luzern',
      'location': [47.050867, 8.305706]
    },
    {
      'name': 'Luzern',
      'location': [47.050892, 8.305658]
    },
    {
      'name': 'Luzern',
      'location': [47.050903, 8.306025]
    },
    {
      'name': 'Luzern',
      'location': [47.050908, 8.308497]
    },
    {
      'name': 'Luzern',
      'location': [47.050922, 8.306206]
    },
    {
      'name': 'Luzern',
      'location': [47.050942, 8.306081]
    },
    {
      'name': 'Luzern',
      'location': [47.050986, 8.306142]
    },
    {
      'name': 'Luzern',
      'location': [47.050994, 8.306156]
    },
    {
      'name': 'Luzern',
      'location': [47.051006, 8.306153]
    },
    {
      'name': 'Luzern',
      'location': [47.051028, 8.306153]
    },
    {
      'name': 'Luzern',
      'location': [47.051031, 8.306153]
    },
    {
      'name': 'Luzern',
      'location': [47.051033, 8.306161]
    },
    {
      'name': 'Luzern',
      'location': [47.051083, 8.306147]
    },
    {
      'name': 'Luzern',
      'location': [47.051086, 8.308678]
    },
    {
      'name': 'Luzern',
      'location': [47.051102, 8.306143]
    },
    {
      'name': 'Luzern',
      'location': [47.051178, 8.303944]
    },
    {
      'name': 'Luzern',
      'location': [47.051297, 8.303944]
    },
    {
      'name': 'Luzern',
      'location': [47.051317, 8.312336]
    },
    {
      'name': 'Luzern',
      'location': [47.051361, 8.307219]
    },
    {
      'name': 'Luzern',
      'location': [47.051372, 8.312058]
    },
    {
      'name': 'Luzern',
      'location': [47.051406, 8.307294]
    },
    {
      'name': 'Luzern',
      'location': [47.051436, 8.303897]
    },
    {
      'name': 'Luzern',
      'location': [47.051492, 8.307217]
    },
    {
      'name': 'Luzern',
      'location': [47.051631, 8.301400]
    },
    {
      'name': 'Luzern',
      'location': [47.051633, 8.301542]
    },
    {
      'name': 'Luzern',
      'location': [47.051672, 8.305985]
    },
    {
      'name': 'Luzern',
      'location': [47.051725, 8.301731]
    },
    {
      'name': 'Luzern',
      'location': [47.051758, 8.301656]
    },
    {
      'name': 'Luzern',
      'location': [47.051794, 8.306203]
    },
    {
      'name': 'Luzern',
      'location': [47.051881, 8.305875]
    },
    {
      'name': 'Luzern',
      'location': [47.051947, 8.305597]
    },
    {
      'name': 'Luzern',
      'location': [47.051997, 8.301692]
    },
    {
      'name': 'Luzern',
      'location': [47.052058, 8.308878]
    },
    {
      'name': 'Luzern',
      'location': [47.052128, 8.308831]
    },
    {
      'name': 'Luzern',
      'location': [47.052178, 8.304578]
    },
    {
      'name': 'Luzern',
      'location': [47.052222, 8.308128]
    },
    {
      'name': 'Luzern',
      'location': [47.052233, 8.308111]
    },
    {
      'name': 'Luzern',
      'location': [47.052283, 8.309253]
    },
    {
      'name': 'Luzern',
      'location': [47.052294, 8.305253]
    },
    {
      'name': 'Luzern',
      'location': [47.052328, 8.305108]
    },
    {
      'name': 'Luzern',
      'location': [47.052331, 8.305119]
    },
    {
      'name': 'Luzern',
      'location': [47.052350, 8.309169]
    },
    {
      'name': 'Luzern',
      'location': [47.052353, 8.309172]
    },
    {
      'name': 'Luzern',
      'location': [47.052356, 8.309178]
    },
    {
      'name': 'Luzern',
      'location': [47.052358, 8.309183]
    },
    {
      'name': 'Luzern',
      'location': [47.052361, 8.309192]
    },
    {
      'name': 'Luzern',
      'location': [47.052367, 8.309197]
    },
    {
      'name': 'Luzern',
      'location': [47.052369, 8.309206]
    },
    {
      'name': 'Luzern',
      'location': [47.052372, 8.309211]
    },
    {
      'name': 'Luzern',
      'location': [47.052378, 8.309219]
    },
    {
      'name': 'Luzern',
      'location': [47.052392, 8.309211]
    },
    {
      'name': 'Luzern',
      'location': [47.052417, 8.306319]
    },
    {
      'name': 'Luzern',
      'location': [47.052419, 8.309194]
    },
    {
      'name': 'Luzern',
      'location': [47.052453, 8.304694]
    },
    {
      'name': 'Luzern',
      'location': [47.052597, 8.306431]
    },
    {
      'name': 'Luzern',
      'location': [47.052633, 8.309133]
    },
    {
      'name': 'Luzern',
      'location': [47.052778, 8.306403]
    },
    {
      'name': 'Luzern',
      'location': [47.053067, 8.307303]
    },
    {
      'name': 'Luzern',
      'location': [47.054308, 8.300781]
    },
    {
      'name': 'Luzern',
      'location': [47.055097, 8.314117]
    },
    {
      'name': 'Luzern',
      'location': [47.055100, 8.313036]
    },
    {
      'name': 'Luzern',
      'location': [47.055117, 8.313011]
    },
    {
      'name': 'Luzern',
      'location': [47.055119, 8.313994]
    },
    {
      'name': 'Luzern',
      'location': [47.055214, 8.313508]
    },
    {
      'name': 'Luzern',
      'location': [47.055222, 8.313461]
    },
    {
      'name': 'Luzern',
      'location': [47.055369, 8.314181]
    },
    {
      'name': 'Luzern',
      'location': [47.055406, 8.314117]
    },
    {
      'name': 'Luzern',
      'location': [47.055472, 8.314136]
    },
    {
      'name': 'Luzern',
      'location': [47.055475, 8.314122]
    },
    {
      'name': 'Luzern',
      'location': [47.057703, 8.310792]
    },
    {
      'name': 'Luzern',
      'location': [47.058219, 8.310642]
    },
    {
      'name': 'Luzern',
      'location': [47.058233, 8.310881]
    },
    {
      'name': 'Luzern',
      'location': [47.058267, 8.310514]
    },
    {
      'name': 'Luzern',
      'location': [47.058275, 8.310531]
    },
    {
      'name': 'Luzern',
      'location': [47.058286, 8.310656]
    },
    {
      'name': 'Luzern',
      'location': [47.058328, 8.310481]
    },
    {
      'name': 'Basel',
      'location': [47.548580, 7.590538]
    },
    {
      'name': 'Basel',
      'location': [47.548850, 7.590144]
    },
    {
      'name': 'Basel',
      'location': [47.548946, 7.590441]
    },
    {
      'name': 'Basel',
      'location': [47.551237, 7.591108]
    },
    {
      'name': 'Basel',
      'location': [47.552333, 7.590986]
    },
    {
      'name': 'Basel',
      'location': [47.552334, 7.590987]
    },
    {
      'name': 'Basel',
      'location': [47.552667, 7.591469]
    },
    {
      'name': 'Basel',
      'location': [47.553151, 7.576123]
    },
    {
      'name': 'Basel',
      'location': [47.554099, 7.594198]
    },
    {
      'name': 'Basel',
      'location': [47.554139, 7.593028]
    },
    {
      'name': 'Basel',
      'location': [47.554186, 7.594184]
    },
    {
      'name': 'Basel',
      'location': [47.554328, 7.576043]
    },
    {
      'name': 'Basel',
      'location': [47.554363, 7.594160]
    },
    {
      'name': 'Basel',
      'location': [47.555976, 7.592317]
    },
    {
      'name': 'Basel',
      'location': [47.556012, 7.592224]
    },
    {
      'name': 'Basel',
      'location': [47.556117, 7.591631]
    },
    {
      'name': 'Basel',
      'location': [47.556322, 7.592001]
    },
    {
      'name': 'Basel',
      'location': [47.556371, 7.592170]
    },
    {
      'name': 'Basel',
      'location': [47.556507, 7.592352]
    },
    {
      'name': 'Basel',
      'location': [47.556572, 7.592476]
    },
    {
      'name': 'Basel',
      'location': [47.556586, 7.592529]
    },
    {
      'name': 'Basel',
      'location': [47.557624, 7.590327]
    },
    {
      'name': 'Basel',
      'location': [47.557805, 7.581741]
    },
    {
      'name': 'Basel',
      'location': [47.557895, 7.581585]
    },
    {
      'name': 'Basel',
      'location': [47.558038, 7.581215]
    },
    {
      'name': 'Basel',
      'location': [47.558228, 7.588128]
    },
    {
      'name': 'Basel',
      'location': [47.559169, 7.586923]
    },
    {
      'name': 'Basel',
      'location': [47.559419, 7.588567]
    },
    {
      'name': 'Basel',
      'location': [47.559903, 7.589464]
    },
    {
      'name': 'Basel',
      'location': [47.559997, 7.588206]
    },
    {
      'name': 'Basel',
      'location': [47.560291, 7.589915]
    },
    {
      'name': 'Basel',
      'location': [47.560408, 7.590469]
    },
    {
      'name': 'Paris',
      'location': [48.833384, 2.316909]
    },
    {
      'name': 'Paris',
      'location': [48.833497, 2.316897]
    },
    {
      'name': 'Paris',
      'location': [48.833595, 2.333411]
    },
    {
      'name': 'Paris',
      'location': [48.833606, 2.333381]
    },
    {
      'name': 'Paris',
      'location': [48.833659, 2.333686]
    },
    {
      'name': 'Paris',
      'location': [48.833672, 2.333569]
    },
    {
      'name': 'Paris',
      'location': [48.833675, 2.333445]
    },
    {
      'name': 'Paris',
      'location': [48.833678, 2.334011]
    },
    {
      'name': 'Paris',
      'location': [48.833745, 2.333611]
    },
    {
      'name': 'Paris',
      'location': [48.834000, 2.333483]
    },
    {
      'name': 'Paris',
      'location': [48.834025, 2.333545]
    },
    {
      'name': 'Paris',
      'location': [48.842858, 2.349658]
    },
    {
      'name': 'Paris',
      'location': [48.843606, 2.349969]
    },
    {
      'name': 'Paris',
      'location': [48.843622, 2.349458]
    },
    {
      'name': 'Paris',
      'location': [48.844942, 2.346622]
    },
    {
      'name': 'Paris',
      'location': [48.846339, 2.345442]
    },
    {
      'name': 'Paris',
      'location': [48.846367, 2.345411]
    },
    {
      'name': 'Paris',
      'location': [48.846392, 2.345267]
    },
    {
      'name': 'Paris',
      'location': [48.846400, 2.345272]
    },
    {
      'name': 'Paris',
      'location': [48.846408, 2.345458]
    },
    {
      'name': 'Paris',
      'location': [48.846439, 2.345461]
    },
    {
      'name': 'Paris',
      'location': [48.846447, 2.344893]
    },
    {
      'name': 'Paris',
      'location': [48.846467, 2.344834]
    },
    {
      'name': 'Paris',
      'location': [48.846475, 2.345019]
    },
    {
      'name': 'Paris',
      'location': [48.846500, 2.347101]
    },
    {
      'name': 'Paris',
      'location': [48.846511, 2.344828]
    },
    {
      'name': 'Paris',
      'location': [48.850000, 2.300350]
    },
    {
      'name': 'Paris',
      'location': [48.850011, 2.283672]
    },
    {
      'name': 'Paris',
      'location': [48.850014, 2.283658]
    },
    {
      'name': 'Paris',
      'location': [48.850017, 2.300475]
    },
    {
      'name': 'Paris',
      'location': [48.850020, 2.316695]
    },
    {
      'name': 'Paris',
      'location': [48.850028, 2.300647]
    },
    {
      'name': 'Paris',
      'location': [48.850033, 2.333867]
    },
    {
      'name': 'Paris',
      'location': [48.850036, 2.300394]
    },
    {
      'name': 'Paris',
      'location': [48.850039, 2.300225]
    },
    {
      'name': 'Paris',
      'location': [48.850042, 2.300628]
    },
    {
      'name': 'Paris',
      'location': [48.850050, 2.300028]
    },
    {
      'name': 'Paris',
      'location': [48.850056, 2.283375]
    },
    {
      'name': 'Paris',
      'location': [48.850067, 2.317372]
    },
    {
      'name': 'Paris',
      'location': [48.850070, 2.300509]
    },
    {
      'name': 'Paris',
      'location': [48.850078, 2.300667]
    },
    {
      'name': 'Paris',
      'location': [48.850081, 2.300656]
    },
    {
      'name': 'Paris',
      'location': [48.850083, 2.300483]
    },
    {
      'name': 'Paris',
      'location': [48.850084, 2.317339]
    },
    {
      'name': 'Paris',
      'location': [48.850089, 2.316750]
    },
    {
      'name': 'Paris',
      'location': [48.850092, 2.300122]
    },
    {
      'name': 'Paris',
      'location': [48.850100, 2.300692]
    },
    {
      'name': 'Paris',
      'location': [48.850106, 2.316675]
    },
    {
      'name': 'Paris',
      'location': [48.850109, 2.316672]
    },
    {
      'name': 'Paris',
      'location': [48.850111, 2.316800]
    },
    {
      'name': 'Paris',
      'location': [48.850114, 2.317025]
    },
    {
      'name': 'Paris',
      'location': [48.850120, 2.317169]
    },
    {
      'name': 'Paris',
      'location': [48.850134, 2.317264]
    },
    {
      'name': 'Paris',
      'location': [48.850136, 2.284042]
    },
    {
      'name': 'Paris',
      'location': [48.850145, 2.284009]
    },
    {
      'name': 'Paris',
      'location': [48.850147, 2.333683]
    },
    {
      'name': 'Paris',
      'location': [48.850153, 2.283708]
    },
    {
      'name': 'Paris',
      'location': [48.850156, 2.283358]
    },
    {
      'name': 'Paris',
      'location': [48.850159, 2.316672]
    },
    {
      'name': 'Paris',
      'location': [48.850161, 2.317283]
    },
    {
      'name': 'Paris',
      'location': [48.850164, 2.300539]
    },
    {
      'name': 'Paris',
      'location': [48.850167, 2.317278]
    },
    {
      'name': 'Paris',
      'location': [48.850172, 2.316714]
    },
    {
      'name': 'Paris',
      'location': [48.850175, 2.300531]
    },
    {
      'name': 'Paris',
      'location': [48.850178, 2.316711]
    },
    {
      'name': 'Paris',
      'location': [48.850181, 2.300528]
    },
    {
      'name': 'Paris',
      'location': [48.850184, 2.316708]
    },
    {
      'name': 'Paris',
      'location': [48.850186, 2.316725]
    },
    {
      'name': 'Paris',
      'location': [48.850189, 2.300478]
    },
    {
      'name': 'Paris',
      'location': [48.850192, 2.283878]
    },
    {
      'name': 'Paris',
      'location': [48.850195, 2.300384]
    },
    {
      'name': 'Paris',
      'location': [48.850197, 2.283992]
    },
    {
      'name': 'Paris',
      'location': [48.850200, 2.317375]
    },
    {
      'name': 'Paris',
      'location': [48.850206, 2.317328]
    },
    {
      'name': 'Paris',
      'location': [48.850208, 2.283389]
    },
    {
      'name': 'Paris',
      'location': [48.850209, 2.317331]
    },
    {
      'name': 'Paris',
      'location': [48.850211, 2.316672]
    },
    {
      'name': 'Paris',
      'location': [48.850220, 2.333683]
    },
    {
      'name': 'Paris',
      'location': [48.850222, 2.316703]
    },
    {
      'name': 'Paris',
      'location': [48.850231, 2.317372]
    },
    {
      'name': 'Paris',
      'location': [48.850239, 2.300486]
    },
    {
      'name': 'Paris',
      'location': [48.850242, 2.300709]
    },
    {
      'name': 'Paris',
      'location': [48.850245, 2.317356]
    },
    {
      'name': 'Paris',
      'location': [48.850253, 2.283872]
    },
    {
      'name': 'Paris',
      'location': [48.850264, 2.333697]
    },
    {
      'name': 'Paris',
      'location': [48.850267, 2.317236]
    },
    {
      'name': 'Paris',
      'location': [48.850270, 2.300503]
    },
    {
      'name': 'Paris',
      'location': [48.850275, 2.317231]
    },
    {
      'name': 'Paris',
      'location': [48.850281, 2.317247]
    },
    {
      'name': 'Paris',
      'location': [48.850284, 2.317339]
    },
    {
      'name': 'Paris',
      'location': [48.850286, 2.300397]
    },
    {
      'name': 'Paris',
      'location': [48.850292, 2.283875]
    },
    {
      'name': 'Paris',
      'location': [48.850300, 2.317331]
    },
    {
      'name': 'Paris',
      'location': [48.850303, 2.300706]
    },
    {
      'name': 'Paris',
      'location': [48.850306, 2.317317]
    },
    {
      'name': 'Paris',
      'location': [48.850309, 2.317322]
    },
    {
      'name': 'Paris',
      'location': [48.850311, 2.283908]
    },
    {
      'name': 'Paris',
      'location': [48.850322, 2.317100]
    },
    {
      'name': 'Paris',
      'location': [48.850328, 2.300647]
    },
    {
      'name': 'Paris',
      'location': [48.850347, 2.283870]
    },
    {
      'name': 'Paris',
      'location': [48.850350, 2.316758]
    },
    {
      'name': 'Paris',
      'location': [48.850356, 2.317125]
    },
    {
      'name': 'Paris',
      'location': [48.850358, 2.283864]
    },
    {
      'name': 'Paris',
      'location': [48.850361, 2.317345]
    },
    {
      'name': 'Paris',
      'location': [48.850375, 2.316811]
    },
    {
      'name': 'Paris',
      'location': [48.850378, 2.317150]
    },
    {
      'name': 'Paris',
      'location': [48.850381, 2.316789]
    },
    {
      'name': 'Paris',
      'location': [48.850383, 2.283384]
    },
    {
      'name': 'Paris',
      'location': [48.850384, 2.317233]
    },
    {
      'name': 'Paris',
      'location': [48.850386, 2.317325]
    },
    {
      'name': 'Paris',
      'location': [48.850389, 2.300636]
    },
    {
      'name': 'Paris',
      'location': [48.850392, 2.333442]
    },
    {
      'name': 'Paris',
      'location': [48.850400, 2.333439]
    },
    {
      'name': 'Paris',
      'location': [48.850403, 2.317067]
    },
    {
      'name': 'Paris',
      'location': [48.850406, 2.333403]
    },
    {
      'name': 'Paris',
      'location': [48.850409, 2.317278]
    },
    {
      'name': 'Paris',
      'location': [48.850411, 2.317275]
    },
    {
      'name': 'Paris',
      'location': [48.850422, 2.317164]
    },
    {
      'name': 'Paris',
      'location': [48.850433, 2.283597]
    },
    {
      'name': 'Paris',
      'location': [48.850434, 2.317297]
    },
    {
      'name': 'Paris',
      'location': [48.850436, 2.300025]
    },
    {
      'name': 'Paris',
      'location': [48.850442, 2.283597]
    },
    {
      'name': 'Paris',
      'location': [48.850443, 2.355105]
    },
    {
      'name': 'Paris',
      'location': [48.850445, 2.316928]
    },
    {
      'name': 'Paris',
      'location': [48.850453, 2.333461]
    },
    {
      'name': 'Paris',
      'location': [48.850456, 2.317203]
    },
    {
      'name': 'Paris',
      'location': [48.850464, 2.334003]
    },
    {
      'name': 'Paris',
      'location': [48.850470, 2.283708]
    },
    {
      'name': 'Paris',
      'location': [48.850472, 2.300597]
    },
    {
      'name': 'Paris',
      'location': [48.850481, 2.283445]
    },
    {
      'name': 'Paris',
      'location': [48.850484, 2.300425]
    },
    {
      'name': 'Paris',
      'location': [48.850492, 2.283747]
    },
    {
      'name': 'Paris',
      'location': [48.850497, 2.300131]
    },
    {
      'name': 'Paris',
      'location': [48.850500, 2.316967]
    },
    {
      'name': 'Paris',
      'location': [48.850506, 2.316969]
    },
    {
      'name': 'Paris',
      'location': [48.850509, 2.316983]
    },
    {
      'name': 'Paris',
      'location': [48.850520, 2.316933]
    },
    {
      'name': 'Paris',
      'location': [48.850522, 2.283370]
    },
    {
      'name': 'Paris',
      'location': [48.850525, 2.316969]
    },
    {
      'name': 'Paris',
      'location': [48.850531, 2.300039]
    },
    {
      'name': 'Paris',
      'location': [48.850534, 2.316967]
    },
    {
      'name': 'Paris',
      'location': [48.850536, 2.316950]
    },
    {
      'name': 'Paris',
      'location': [48.850539, 2.316950]
    },
    {
      'name': 'Paris',
      'location': [48.850542, 2.334028]
    },
    {
      'name': 'Paris',
      'location': [48.850547, 2.333339]
    },
    {
      'name': 'Paris',
      'location': [48.850550, 2.283817]
    },
    {
      'name': 'Paris',
      'location': [48.850553, 2.316859]
    },
    {
      'name': 'Paris',
      'location': [48.850556, 2.333339]
    },
    {
      'name': 'Paris',
      'location': [48.850567, 2.283672]
    },
    {
      'name': 'Paris',
      'location': [48.850570, 2.300645]
    },
    {
      'name': 'Paris',
      'location': [48.850572, 2.333856]
    },
    {
      'name': 'Paris',
      'location': [48.850575, 2.333350]
    },
    {
      'name': 'Paris',
      'location': [48.850581, 2.316708]
    },
    {
      'name': 'Paris',
      'location': [48.850595, 2.283820]
    },
    {
      'name': 'Paris',
      'location': [48.850597, 2.333406]
    },
    {
      'name': 'Paris',
      'location': [48.850600, 2.334019]
    },
    {
      'name': 'Paris',
      'location': [48.850603, 2.333567]
    },
    {
      'name': 'Paris',
      'location': [48.850611, 2.317195]
    },
    {
      'name': 'Paris',
      'location': [48.850614, 2.333758]
    },
    {
      'name': 'Paris',
      'location': [48.850617, 2.333553]
    },
    {
      'name': 'Paris',
      'location': [48.850622, 2.317147]
    },
    {
      'name': 'Paris',
      'location': [48.850625, 2.333358]
    },
    {
      'name': 'Paris',
      'location': [48.850631, 2.300467]
    },
    {
      'name': 'Paris',
      'location': [48.850633, 2.300708]
    },
    {
      'name': 'Paris',
      'location': [48.850636, 2.300533]
    },
    {
      'name': 'Paris',
      'location': [48.850645, 2.316742]
    },
    {
      'name': 'Paris',
      'location': [48.850647, 2.300570]
    },
    {
      'name': 'Paris',
      'location': [48.850650, 2.317025]
    },
    {
      'name': 'Paris',
      'location': [48.850653, 2.317006]
    },
    {
      'name': 'Paris',
      'location': [48.850656, 2.300511]
    },
    {
      'name': 'Paris',
      'location': [48.850661, 2.283595]
    },
    {
      'name': 'Paris',
      'location': [48.850664, 2.283975]
    },
    {
      'name': 'Paris',
      'location': [48.850675, 2.300175]
    },
    {
      'name': 'Paris',
      'location': [48.850678, 2.317019]
    },
    {
      'name': 'Paris',
      'location': [48.850686, 2.300475]
    },
    {
      'name': 'Paris',
      'location': [48.850695, 2.283431]
    },
    {
      'name': 'Paris',
      'location': [48.850697, 2.300378]
    },
    {
      'name': 'Paris',
      'location': [48.850700, 2.283986]
    },
    {
      'name': 'Paris',
      'location': [48.850703, 2.300136]
    },
    {
      'name': 'Paris',
      'location': [48.850706, 2.333283]
    },
    {
      'name': 'Paris',
      'location': [48.850792, 2.333886]
    },
    {
      'name': 'Paris',
      'location': [48.850839, 2.333850]
    },
    {
      'name': 'Paris',
      'location': [48.850847, 2.333964]
    },
    {
      'name': 'Paris',
      'location': [48.852314, 2.350089]
    },
    {
      'name': 'Paris',
      'location': [48.852375, 2.350508]
    },
    {
      'name': 'Paris',
      'location': [48.852436, 2.350061]
    },
    {
      'name': 'Paris',
      'location': [48.852444, 2.350133]
    },
    {
      'name': 'Paris',
      'location': [48.852469, 2.350078]
    },
    {
      'name': 'Paris',
      'location': [48.852475, 2.350403]
    },
    {
      'name': 'Paris',
      'location': [48.852489, 2.350069]
    },
    {
      'name': 'Paris',
      'location': [48.852492, 2.350050]
    },
    {
      'name': 'Paris',
      'location': [48.852506, 2.350142]
    },
    {
      'name': 'Paris',
      'location': [48.852514, 2.350328]
    },
    {
      'name': 'Paris',
      'location': [48.852536, 2.349947]
    },
    {
      'name': 'Paris',
      'location': [48.852550, 2.350100]
    },
    {
      'name': 'Paris',
      'location': [48.852558, 2.350294]
    },
    {
      'name': 'Paris',
      'location': [48.852559, 2.351644]
    },
    {
      'name': 'Paris',
      'location': [48.852570, 2.351591]
    },
    {
      'name': 'Paris',
      'location': [48.852597, 2.350078]
    },
    {
      'name': 'Paris',
      'location': [48.852614, 2.350067]
    },
    {
      'name': 'Paris',
      'location': [48.852622, 2.350231]
    },
    {
      'name': 'Paris',
      'location': [48.852647, 2.349953]
    },
    {
      'name': 'Paris',
      'location': [48.852653, 2.350231]
    },
    {
      'name': 'Paris',
      'location': [48.852664, 2.350114]
    },
    {
      'name': 'Paris',
      'location': [48.852667, 2.350022]
    },
    {
      'name': 'Paris',
      'location': [48.852675, 2.349978]
    },
    {
      'name': 'Paris',
      'location': [48.852703, 2.350072]
    },
    {
      'name': 'Paris',
      'location': [48.852711, 2.350706]
    },
    {
      'name': 'Paris',
      'location': [48.852733, 2.352508]
    },
    {
      'name': 'Paris',
      'location': [48.852736, 2.350578]
    },
    {
      'name': 'Paris',
      'location': [48.852767, 2.350314]
    },
    {
      'name': 'Paris',
      'location': [48.852792, 2.350564]
    },
    {
      'name': 'Paris',
      'location': [48.852806, 2.350881]
    },
    {
      'name': 'Paris',
      'location': [48.852814, 2.349781]
    },
    {
      'name': 'Paris',
      'location': [48.852872, 2.349775]
    },
    {
      'name': 'Paris',
      'location': [48.852881, 2.350094]
    },
    {
      'name': 'Paris',
      'location': [48.852892, 2.349767]
    },
    {
      'name': 'Paris',
      'location': [48.852919, 2.350844]
    },
    {
      'name': 'Paris',
      'location': [48.852933, 2.350456]
    },
    {
      'name': 'Paris',
      'location': [48.852950, 2.350519]
    },
    {
      'name': 'Paris',
      'location': [48.852964, 2.348606]
    },
    {
      'name': 'Paris',
      'location': [48.852975, 2.350769]
    },
    {
      'name': 'Paris',
      'location': [48.853003, 2.350797]
    },
    {
      'name': 'Paris',
      'location': [48.853006, 2.349981]
    },
    {
      'name': 'Paris',
      'location': [48.853128, 2.350822]
    },
    {
      'name': 'Paris',
      'location': [48.853144, 2.350747]
    },
    {
      'name': 'Paris',
      'location': [48.853166, 2.350663]
    },
    {
      'name': 'Paris',
      'location': [48.853178, 2.349456]
    },
    {
      'name': 'Paris',
      'location': [48.853258, 2.349356]
    },
    {
      'name': 'Paris',
      'location': [48.853394, 2.348439]
    },
    {
      'name': 'Paris',
      'location': [48.853397, 2.348439]
    },
    {
      'name': 'Paris',
      'location': [48.853431, 2.348550]
    },
    {
      'name': 'Paris',
      'location': [48.853448, 2.348634]
    },
    {
      'name': 'Paris',
      'location': [48.853450, 2.302133]
    },
    {
      'name': 'Paris',
      'location': [48.853506, 2.333394]
    },
    {
      'name': 'Paris',
      'location': [48.853514, 2.348264]
    },
    {
      'name': 'Paris',
      'location': [48.853541, 2.348412]
    },
    {
      'name': 'Paris',
      'location': [48.853567, 2.348775]
    },
    {
      'name': 'Paris',
      'location': [48.853603, 2.348614]
    },
    {
      'name': 'Paris',
      'location': [48.853619, 2.346842]
    },
    {
      'name': 'Paris',
      'location': [48.853631, 2.348031]
    },
    {
      'name': 'Paris',
      'location': [48.853650, 2.347811]
    },
    {
      'name': 'Paris',
      'location': [48.853658, 2.346722]
    },
    {
      'name': 'Paris',
      'location': [48.853719, 2.346583]
    },
    {
      'name': 'Paris',
      'location': [48.853758, 2.346464]
    },
    {
      'name': 'Paris',
      'location': [48.853783, 2.346400]
    },
    {
      'name': 'Paris',
      'location': [48.853788, 2.344523]
    },
    {
      'name': 'Paris',
      'location': [48.853819, 2.346247]
    },
    {
      'name': 'Paris',
      'location': [48.853829, 2.344586]
    },
    {
      'name': 'Paris',
      'location': [48.853867, 2.346014]
    },
    {
      'name': 'Paris',
      'location': [48.853875, 2.346131]
    },
    {
      'name': 'Paris',
      'location': [48.853911, 2.333517]
    },
    {
      'name': 'Paris',
      'location': [48.853928, 2.345858]
    },
    {
      'name': 'Paris',
      'location': [48.853956, 2.333578]
    },
    {
      'name': 'Paris',
      'location': [48.854056, 2.333528]
    },
    {
      'name': 'Paris',
      'location': [48.854294, 2.344597]
    },
    {
      'name': 'Paris',
      'location': [48.854644, 2.305342]
    },
    {
      'name': 'Paris',
      'location': [48.855067, 2.299494]
    },
    {
      'name': 'Paris',
      'location': [48.855433, 2.346286]
    },
    {
      'name': 'Paris',
      'location': [48.855519, 2.346171]
    },
    {
      'name': 'Paris',
      'location': [48.855589, 2.345850]
    },
    {
      'name': 'Paris',
      'location': [48.856195, 2.346651]
    },
    {
      'name': 'Paris',
      'location': [48.856253, 2.346734]
    },
    {
      'name': 'Paris',
      'location': [48.857122, 2.346824]
    },
    {
      'name': 'Paris',
      'location': [48.858397, 2.342154]
    },
    {
      'name': 'Paris',
      'location': [48.859316, 2.293070]
    },
    {
      'name': 'Paris',
      'location': [48.859428, 2.340273]
    },
    {
      'name': 'Paris',
      'location': [48.859912, 2.340503]
    },
    {
      'name': 'Paris',
      'location': [48.859920, 2.340415]
    },
    {
      'name': 'Paris',
      'location': [48.860117, 2.333728]
    },
    {
      'name': 'Paris',
      'location': [48.860183, 2.341048]
    },
    {
      'name': 'Paris',
      'location': [48.860320, 2.338679]
    },
    {
      'name': 'Paris',
      'location': [48.860400, 2.333725]
    },
    {
      'name': 'Paris',
      'location': [48.860461, 2.338103]
    },
    {
      'name': 'Paris',
      'location': [48.860508, 2.291547]
    },
    {
      'name': 'Paris',
      'location': [48.860594, 2.315797]
    },
    {
      'name': 'Paris',
      'location': [48.860629, 2.337352]
    },
    {
      'name': 'Paris',
      'location': [48.860670, 2.337341]
    },
    {
      'name': 'Paris',
      'location': [48.860806, 2.338781]
    },
    {
      'name': 'Paris',
      'location': [48.860845, 2.340527]
    },
    {
      'name': 'Paris',
      'location': [48.861256, 2.335678]
    },
    {
      'name': 'Paris',
      'location': [48.861281, 2.335694]
    },
    {
      'name': 'Paris',
      'location': [48.861469, 2.328019]
    },
    {
      'name': 'Paris',
      'location': [48.861481, 2.335209]
    },
    {
      'name': 'Paris',
      'location': [48.861629, 2.333159]
    },
    {
      'name': 'Paris',
      'location': [48.861640, 2.333068]
    },
    {
      'name': 'Paris',
      'location': [48.862027, 2.288612]
    },
    {
      'name': 'Paris',
      'location': [48.862044, 2.288899]
    },
    {
      'name': 'Paris',
      'location': [48.862140, 2.289295]
    },
    {
      'name': 'Paris',
      'location': [48.862228, 2.318556]
    },
    {
      'name': 'Paris',
      'location': [48.862321, 2.330812]
    },
    {
      'name': 'Paris',
      'location': [48.862799, 2.329544]
    },
    {
      'name': 'Paris',
      'location': [48.862932, 2.328762]
    },
    {
      'name': 'Paris',
      'location': [48.863690, 2.313267]
    },
    {
      'name': 'Paris',
      'location': [48.864070, 2.313317]
    },
    {
      'name': 'Paris',
      'location': [48.864172, 2.306839]
    },
    {
      'name': 'Paris',
      'location': [48.864183, 2.306767]
    },
    {
      'name': 'Paris',
      'location': [48.864261, 2.307983]
    },
    {
      'name': 'Paris',
      'location': [48.864264, 2.303472]
    },
    {
      'name': 'Paris',
      'location': [48.864269, 2.303469]
    },
    {
      'name': 'Paris',
      'location': [48.864319, 2.303431]
    },
    {
      'name': 'Paris',
      'location': [48.864339, 2.303417]
    },
    {
      'name': 'Paris',
      'location': [48.864378, 2.303389]
    },
    {
      'name': 'Paris',
      'location': [48.864419, 2.303361]
    },
    {
      'name': 'Paris',
      'location': [48.865755, 2.321332]
    },
    {
      'name': 'Paris',
      'location': [48.865817, 2.313596]
    },
    {
      'name': 'Paris',
      'location': [48.865877, 2.321392]
    },
    {
      'name': 'Paris',
      'location': [48.866449, 2.313446]
    },
    {
      'name': 'Paris',
      'location': [48.866543, 2.313678]
    },
    {
      'name': 'Paris',
      'location': [48.866675, 2.300156]
    },
    {
      'name': 'Paris',
      'location': [48.866683, 2.283686]
    },
    {
      'name': 'Paris',
      'location': [48.866708, 2.317336]
    },
    {
      'name': 'Paris',
      'location': [48.866733, 2.317131]
    },
    {
      'name': 'Paris',
      'location': [48.866739, 2.283686]
    },
    {
      'name': 'Paris',
      'location': [48.866742, 2.300409]
    },
    {
      'name': 'Paris',
      'location': [48.866744, 2.317325]
    },
    {
      'name': 'Paris',
      'location': [48.866745, 2.283697]
    },
    {
      'name': 'Paris',
      'location': [48.866769, 2.300161]
    },
    {
      'name': 'Paris',
      'location': [48.866772, 2.300422]
    },
    {
      'name': 'Paris',
      'location': [48.866792, 2.283928]
    },
    {
      'name': 'Paris',
      'location': [48.866797, 2.300556]
    },
    {
      'name': 'Paris',
      'location': [48.866800, 2.300261]
    },
    {
      'name': 'Paris',
      'location': [48.866803, 2.300167]
    },
    {
      'name': 'Paris',
      'location': [48.866806, 2.283772]
    },
    {
      'name': 'Paris',
      'location': [48.866811, 2.300206]
    },
    {
      'name': 'Paris',
      'location': [48.866814, 2.283795]
    },
    {
      'name': 'Paris',
      'location': [48.866822, 2.300192]
    },
    {
      'name': 'Paris',
      'location': [48.866844, 2.316686]
    },
    {
      'name': 'Paris',
      'location': [48.866853, 2.283861]
    },
    {
      'name': 'Paris',
      'location': [48.866856, 2.283789]
    },
    {
      'name': 'Paris',
      'location': [48.866875, 2.317045]
    },
    {
      'name': 'Paris',
      'location': [48.866878, 2.300139]
    },
    {
      'name': 'Paris',
      'location': [48.866881, 2.300153]
    },
    {
      'name': 'Paris',
      'location': [48.866883, 2.316728]
    },
    {
      'name': 'Paris',
      'location': [48.866889, 2.300070]
    },
    {
      'name': 'Paris',
      'location': [48.866897, 2.300122]
    },
    {
      'name': 'Paris',
      'location': [48.866908, 2.283986]
    },
    {
      'name': 'Paris',
      'location': [48.866911, 2.300145]
    },
    {
      'name': 'Paris',
      'location': [48.866917, 2.317056]
    },
    {
      'name': 'Paris',
      'location': [48.866922, 2.300406]
    },
    {
      'name': 'Paris',
      'location': [48.866967, 2.317014]
    },
    {
      'name': 'Paris',
      'location': [48.866975, 2.283972]
    },
    {
      'name': 'Paris',
      'location': [48.866978, 2.300300]
    },
    {
      'name': 'Paris',
      'location': [48.866997, 2.316764]
    },
    {
      'name': 'Paris',
      'location': [48.867042, 2.283384]
    },
    {
      'name': 'Paris',
      'location': [48.867053, 2.316822]
    },
    {
      'name': 'Paris',
      'location': [48.867150, 2.283786]
    },
    {
      'name': 'Paris',
      'location': [48.867170, 2.283747]
    },
    {
      'name': 'Paris',
      'location': [48.867189, 2.283631]
    },
    {
      'name': 'Paris',
      'location': [48.867194, 2.300592]
    },
    {
      'name': 'Paris',
      'location': [48.867203, 2.283609]
    },
    {
      'name': 'Paris',
      'location': [48.867219, 2.316997]
    },
    {
      'name': 'Paris',
      'location': [48.867222, 2.300564]
    },
    {
      'name': 'Paris',
      'location': [48.867239, 2.283381]
    },
    {
      'name': 'Paris',
      'location': [48.867245, 2.283828]
    },
    {
      'name': 'Paris',
      'location': [48.867253, 2.283378]
    },
    {
      'name': 'Paris',
      'location': [48.867300, 2.283531]
    },
    {
      'name': 'Paris',
      'location': [48.867308, 2.283506]
    },
    {
      'name': 'Paris',
      'location': [48.867311, 2.283603]
    },
    {
      'name': 'Paris',
      'location': [48.867317, 2.283617]
    },
    {
      'name': 'Paris',
      'location': [48.867325, 2.283622]
    },
    {
      'name': 'Paris',
      'location': [48.867356, 2.283945]
    },
    {
      'name': 'Paris',
      'location': [48.867358, 2.283656]
    },
    {
      'name': 'Paris',
      'location': [48.867361, 2.283778]
    },
    {
      'name': 'Paris',
      'location': [48.867367, 2.317303]
    },
    {
      'name': 'Paris',
      'location': [48.867473, 2.314126]
    },
    {
      'name': 'Paris',
      'location': [48.870533, 2.332478]
    },
    {
      'name': 'Paris',
      'location': [48.870847, 2.332331]
    },
    {
      'name': 'Paris',
      'location': [48.870858, 2.332278]
    },
    {
      'name': 'Paris',
      'location': [48.870864, 2.332231]
    },
    {
      'name': 'Paris',
      'location': [48.870881, 2.332144]
    },
    {
      'name': 'Paris',
      'location': [48.870897, 2.332172]
    },
    {
      'name': 'Paris',
      'location': [48.870900, 2.332217]
    },
    {
      'name': 'Paris',
      'location': [48.870911, 2.332189]
    },
    {
      'name': 'Paris',
      'location': [48.870939, 2.332272]
    },
    {
      'name': 'Paris',
      'location': [48.870956, 2.332158]
    },
    {
      'name': 'Paris',
      'location': [48.871089, 2.332147]
    },
    {
      'name': 'Paris',
      'location': [48.871225, 2.331783]
    },
    {
      'name': 'Paris',
      'location': [48.871267, 2.332125]
    },
    {
      'name': 'Paris',
      'location': [48.871275, 2.332311]
    },
    {
      'name': 'Paris',
      'location': [48.883761, 2.333970]
    },
    {
      'name': 'Paris',
      'location': [48.883789, 2.333997]
    },
    {
      'name': 'Paris',
      'location': [48.883833, 2.333981]
    },
    {
      'name': 'Paris',
      'location': [48.883978, 2.333972]
    },
    {
      'name': 'Paris',
      'location': [48.885828, 2.343217]
    },
    {
      'name': 'Paris',
      'location': [48.885844, 2.343239]
    },
    {
      'name': 'Paris',
      'location': [48.885847, 2.343236]
    },
    {
      'name': 'Paris',
      'location': [48.885853, 2.343219]
    },
    {
      'name': 'Paris',
      'location': [48.885861, 2.343211]
    },
    {
      'name': 'Paris',
      'location': [48.885878, 2.343192]
    },
    {
      'name': 'Paris',
      'location': [48.885919, 2.343231]
    },
    {
      'name': 'Paris',
      'location': [48.886047, 2.343228]
    },
    {
      'name': 'Paris',
      'location': [48.886142, 2.343128]
    },
    {
      'name': 'Paris',
      'location': [48.886147, 2.343128]
    },
    {
      'name': 'Paris',
      'location': [48.886150, 2.343128]
    },
    {
      'name': 'Paris',
      'location': [48.886375, 2.344994]
    },
    {
      'name': 'Paris',
      'location': [48.886978, 2.342647]
    },
    {
      'name': 'Paris',
      'location': [48.886989, 2.342697]
    },
    {
      'name': 'Paris',
      'location': [48.887025, 2.342728]
    },
    {
      'name': 'Paris',
      'location': [48.887106, 2.343325]
    },
    {
      'name': 'Paris',
      'location': [48.887122, 2.343319]
    },
    {
      'name': 'London',
      'location': [51.495039, -0.146308]
    },
    {
      'name': 'London',
      'location': [51.496508, -0.142758]
    },
    {
      'name': 'London',
      'location': [51.496742, -0.140278]
    },
    {
      'name': 'London',
      'location': [51.501547, -0.141225]
    },
    {
      'name': 'London',
      'location': [51.501878, -0.140806]
    },
    {
      'name': 'London',
      'location': [51.505269, 0.053600]
    },
    {
      'name': 'London',
      'location': [51.505578, 0.044867]
    },
    {
      'name': 'London',
      'location': [51.507033, 0.007725]
    },
    {
      'name': 'London',
      'location': [51.507406, -0.005664]
    },
    {
      'name': 'London',
      'location': [51.507728, -0.016994]
    },
    {
      'name': 'London',
      'location': [51.510986, -0.048753]
    },
    {
      'name': 'London',
      'location': [51.511947, -0.071067]
    },
    {
      'name': 'Kerry',
      'location': [51.766995, -10.017208]
    },
    {
      'name': 'Kerry',
      'location': [51.767011, -10.017219]
    },
    {
      'name': 'Kerry',
      'location': [51.774106, -10.020764]
    },
    {
      'name': 'Kerry',
      'location': [51.774122, -10.020775]
    },
    {
      'name': 'Kerry',
      'location': [51.783631, -9.983378]
    },
    {
      'name': 'Kerry',
      'location': [51.816956, -9.967264]
    },
    {
      'name': 'Kerry',
      'location': [51.825489, -9.972244]
    },
    {
      'name': 'Kerry',
      'location': [51.833078, -10.183495]
    },
    {
      'name': 'Kerry',
      'location': [51.833100, -10.183592]
    },
    {
      'name': 'Kerry',
      'location': [51.833119, -10.183142]
    },
    {
      'name': 'Kerry',
      'location': [51.833767, -10.183728]
    },
    {
      'name': 'Kerry',
      'location': [51.833772, -10.183920]
    },
    {
      'name': 'Kerry',
      'location': [51.833881, -10.183461]
    },
    {
      'name': 'Kerry',
      'location': [51.867072, -10.350344]
    },
    {
      'name': 'Kerry',
      'location': [51.883464, -10.367019]
    },
    {
      'name': 'Kerry',
      'location': [51.883800, -10.350234]
    },
    {
      'name': 'Kerry',
      'location': [51.883803, -10.350231]
    },
    {
      'name': 'Kerry',
      'location': [51.883819, -10.350214]
    },
    {
      'name': 'Kerry',
      'location': [51.885953, -10.366569]
    },
    {
      'name': 'Kerry',
      'location': [51.891781, -10.396844]
    },
    {
      'name': 'Kerry',
      'location': [51.891783, -10.396842]
    },
    {
      'name': 'Kerry',
      'location': [51.891792, -10.396825]
    },
    {
      'name': 'Kerry',
      'location': [51.891794, -10.396819]
    },
    {
      'name': 'Kerry',
      'location': [51.891956, -10.396481]
    },
    {
      'name': 'Kerry',
      'location': [51.891958, -10.396492]
    },
    {
      'name': 'Kerry',
      'location': [51.891961, -10.396478]
    },
    {
      'name': 'Kerry',
      'location': [51.891964, -10.396475]
    },
    {
      'name': 'Kerry',
      'location': [51.891967, -10.396472]
    },
    {
      'name': 'Kerry',
      'location': [51.898581, -10.404511]
    },
    {
      'name': 'Kerry',
      'location': [51.898592, -10.404517]
    },
    {
      'name': 'Kerry',
      'location': [51.898594, -10.404519]
    },
    {
      'name': 'Kerry',
      'location': [51.916897, -10.267045]
    },
    {
      'name': 'Kerry',
      'location': [51.917186, -10.283581]
    },
    {
      'name': 'Kerry',
      'location': [51.927603, -10.279258]
    },
    {
      'name': 'Kerry',
      'location': [51.927897, -10.278756]
    },
    {
      'name': 'Kerry',
      'location': [51.927989, -10.278475]
    },
    {
      'name': 'Kerry',
      'location': [51.950259, -9.583378]
    },
    {
      'name': 'Kerry',
      'location': [51.966722, -9.583656]
    },
    {
      'name': 'Kerry',
      'location': [51.967222, -9.592692]
    },
    {
      'name': 'Kerry',
      'location': [51.967225, -9.583447]
    },
    {
      'name': 'Kerry',
      'location': [51.967433, -9.592900]
    },
    {
      'name': 'Kerry',
      'location': [51.982586, -10.150175]
    },
    {
      'name': 'Kerry',
      'location': [51.985353, -9.564803]
    },
    {
      'name': 'Kerry',
      'location': [51.985367, -9.564861]
    },
    {
      'name': 'Kerry',
      'location': [51.985369, -9.564858]
    },
    {
      'name': 'Kerry',
      'location': [51.985375, -9.564853]
    },
    {
      'name': 'Kerry',
      'location': [51.985439, -9.564428]
    },
    {
      'name': 'Kerry',
      'location': [51.985442, -9.564425]
    },
    {
      'name': 'Kerry',
      'location': [52.000000, -9.500625]
    },
    {
      'name': 'Kerry',
      'location': [52.000072, -9.500150]
    },
    {
      'name': 'Kerry',
      'location': [52.000414, -9.500381]
    },
    {
      'name': 'Kerry',
      'location': [52.000450, -9.500125]
    },
    {
      'name': 'Kerry',
      'location': [52.000453, -9.500111]
    },
    {
      'name': 'Kerry',
      'location': [52.000458, -9.500064]
    },
    {
      'name': 'Kerry',
      'location': [52.000461, -9.500064]
    },
    {
      'name': 'Kerry',
      'location': [52.000464, -9.500058]
    },
    {
      'name': 'Kerry',
      'location': [52.000511, -9.500245]
    },
    {
      'name': 'Kerry',
      'location': [52.000514, -9.500264]
    },
    {
      'name': 'Kerry',
      'location': [52.000517, -9.500292]
    },
    {
      'name': 'Kerry',
      'location': [52.000550, -9.500331]
    },
    {
      'name': 'Kerry',
      'location': [52.000558, -9.500331]
    },
    {
      'name': 'Kerry',
      'location': [52.000572, -9.533547]
    },
    {
      'name': 'Kerry',
      'location': [52.000594, -9.500342]
    },
    {
      'name': 'Kerry',
      'location': [52.000603, -9.534000]
    },
    {
      'name': 'Kerry',
      'location': [52.000608, -9.533550]
    },
    {
      'name': 'Kerry',
      'location': [52.000664, -9.500672]
    },
    {
      'name': 'Kerry',
      'location': [52.003297, -9.505800]
    },
    {
      'name': 'Kerry',
      'location': [52.003306, -9.505753]
    },
    {
      'name': 'Kerry',
      'location': [52.003308, -9.505747]
    },
    {
      'name': 'Kerry',
      'location': [52.004097, -9.506019]
    },
    {
      'name': 'Kerry',
      'location': [52.004111, -9.506019]
    },
    {
      'name': 'Kerry',
      'location': [52.004339, -9.506550]
    },
    {
      'name': 'Kerry',
      'location': [52.004931, -9.506361]
    },
    {
      'name': 'Kerry',
      'location': [52.007675, -9.543847]
    },
    {
      'name': 'Kerry',
      'location': [52.007875, -9.543097]
    },
    {
      'name': 'Kerry',
      'location': [52.009094, -9.549183]
    },
    {
      'name': 'Kerry',
      'location': [52.009097, -9.549186]
    },
    {
      'name': 'Kerry',
      'location': [52.009100, -9.549186]
    },
    {
      'name': 'Kerry',
      'location': [52.009106, -9.549192]
    },
    {
      'name': 'Kerry',
      'location': [52.009111, -9.549256]
    },
    {
      'name': 'Kerry',
      'location': [52.009142, -9.549164]
    },
    {
      'name': 'Kerry',
      'location': [52.009150, -9.549369]
    },
    {
      'name': 'Kerry',
      'location': [52.016481, -9.483270]
    },
    {
      'name': 'Kerry',
      'location': [52.016558, -9.483403]
    },
    {
      'name': 'Kerry',
      'location': [52.016570, -9.483400]
    },
    {
      'name': 'Kerry',
      'location': [52.016639, -9.483420]
    },
    {
      'name': 'Kerry',
      'location': [52.016656, -9.483356]
    },
    {
      'name': 'Kerry',
      'location': [52.016672, -9.483072]
    },
    {
      'name': 'Kerry',
      'location': [52.016733, -9.483442]
    },
    {
      'name': 'Kerry',
      'location': [52.016739, -9.483436]
    },
    {
      'name': 'Kerry',
      'location': [52.016747, -9.500128]
    },
    {
      'name': 'Kerry',
      'location': [52.016770, -9.483072]
    },
    {
      'name': 'Kerry',
      'location': [52.016772, -9.483047]
    },
    {
      'name': 'Kerry',
      'location': [52.016797, -9.483039]
    },
    {
      'name': 'Kerry',
      'location': [52.016806, -9.483025]
    },
    {
      'name': 'Kerry',
      'location': [52.016817, -9.483003]
    },
    {
      'name': 'Kerry',
      'location': [52.016864, -9.483453]
    },
    {
      'name': 'Kerry',
      'location': [52.016872, -9.500197]
    },
    {
      'name': 'Kerry',
      'location': [52.016875, -9.483022]
    },
    {
      'name': 'Kerry',
      'location': [52.016881, -9.483022]
    },
    {
      'name': 'Kerry',
      'location': [52.016925, -9.483753]
    },
    {
      'name': 'Kerry',
      'location': [52.016936, -9.483967]
    },
    {
      'name': 'Kerry',
      'location': [52.016939, -9.483581]
    },
    {
      'name': 'Kerry',
      'location': [52.016942, -9.483350]
    },
    {
      'name': 'Kerry',
      'location': [52.016961, -9.483358]
    },
    {
      'name': 'Kerry',
      'location': [52.016964, -9.633814]
    },
    {
      'name': 'Kerry',
      'location': [52.016975, -9.500619]
    },
    {
      'name': 'Kerry',
      'location': [52.016983, -9.484025]
    },
    {
      'name': 'Kerry',
      'location': [52.016986, -9.483642]
    },
    {
      'name': 'Kerry',
      'location': [52.017006, -9.483836]
    },
    {
      'name': 'Kerry',
      'location': [52.017064, -9.483645]
    },
    {
      'name': 'Kerry',
      'location': [52.017086, -9.483570]
    },
    {
      'name': 'Kerry',
      'location': [52.017089, -9.500003]
    },
    {
      'name': 'Kerry',
      'location': [52.017097, -9.483567]
    },
    {
      'name': 'Kerry',
      'location': [52.017111, -9.483856]
    },
    {
      'name': 'Kerry',
      'location': [52.017122, -9.483581]
    },
    {
      'name': 'Kerry',
      'location': [52.017125, -9.483775]
    },
    {
      'name': 'Kerry',
      'location': [52.017131, -9.483820]
    },
    {
      'name': 'Kerry',
      'location': [52.017208, -9.500108]
    },
    {
      'name': 'Kerry',
      'location': [52.017247, -9.502700]
    },
    {
      'name': 'Kerry',
      'location': [52.017253, -9.483884]
    },
    {
      'name': 'Kerry',
      'location': [52.017256, -9.483700]
    },
    {
      'name': 'Kerry',
      'location': [52.017261, -9.483672]
    },
    {
      'name': 'Kerry',
      'location': [52.017267, -9.500292]
    },
    {
      'name': 'Kerry',
      'location': [52.017278, -9.503228]
    },
    {
      'name': 'Kerry',
      'location': [52.017283, -9.483995]
    },
    {
      'name': 'Kerry',
      'location': [52.017289, -9.483439]
    },
    {
      'name': 'Kerry',
      'location': [52.017297, -9.500489]
    },
    {
      'name': 'Kerry',
      'location': [52.017300, -9.500122]
    },
    {
      'name': 'Kerry',
      'location': [52.017353, -9.633750]
    },
    {
      'name': 'Kerry',
      'location': [52.017356, -9.633750]
    },
    {
      'name': 'Kerry',
      'location': [52.017359, -9.633753]
    },
    {
      'name': 'Kerry',
      'location': [52.017367, -9.483845]
    },
    {
      'name': 'Kerry',
      'location': [52.017370, -9.483853]
    },
    {
      'name': 'Kerry',
      'location': [52.017375, -9.483870]
    },
    {
      'name': 'Kerry',
      'location': [52.017658, -9.504019]
    },
    {
      'name': 'Kerry',
      'location': [52.018014, -9.501911]
    },
    {
      'name': 'Kerry',
      'location': [52.018314, -9.497397]
    },
    {
      'name': 'Kerry',
      'location': [52.018364, -9.497378]
    },
    {
      'name': 'Kerry',
      'location': [52.018417, -9.497353]
    },
    {
      'name': 'Kerry',
      'location': [52.018464, -9.497333]
    },
    {
      'name': 'Kerry',
      'location': [52.018478, -9.504322]
    },
    {
      'name': 'Kerry',
      'location': [52.018486, -9.504317]
    },
    {
      'name': 'Kerry',
      'location': [52.018494, -9.497319]
    },
    {
      'name': 'Kerry',
      'location': [52.020000, -9.497156]
    },
    {
      'name': 'Kerry',
      'location': [52.020008, -9.497208]
    },
    {
      'name': 'Kerry',
      'location': [52.020067, -9.497358]
    },
    {
      'name': 'Kerry',
      'location': [52.020086, -9.497272]
    },
    {
      'name': 'Kerry',
      'location': [52.020092, -9.497317]
    },
    {
      'name': 'Kerry',
      'location': [52.020094, -9.497322]
    },
    {
      'name': 'Kerry',
      'location': [52.021711, -9.496553]
    },
    {
      'name': 'Kerry',
      'location': [52.021717, -9.496561]
    },
    {
      'name': 'Kerry',
      'location': [52.021719, -9.496564]
    },
    {
      'name': 'Kerry',
      'location': [52.021725, -9.496572]
    },
    {
      'name': 'Kerry',
      'location': [52.021767, -9.496378]
    },
    {
      'name': 'Kerry',
      'location': [52.021769, -9.496369]
    },
    {
      'name': 'Kerry',
      'location': [52.021775, -9.496356]
    },
    {
      'name': 'Kerry',
      'location': [52.022175, -9.495797]
    },
    {
      'name': 'Kerry',
      'location': [52.022194, -9.495717]
    },
    {
      'name': 'Kerry',
      'location': [52.022200, -9.495728]
    },
    {
      'name': 'Kerry',
      'location': [52.022203, -9.495739]
    },
    {
      'name': 'Kerry',
      'location': [52.022206, -9.495744]
    },
    {
      'name': 'Kerry',
      'location': [52.022208, -9.495753]
    },
    {
      'name': 'Kerry',
      'location': [52.022211, -9.495756]
    },
    {
      'name': 'Kerry',
      'location': [52.022806, -9.495447]
    },
    {
      'name': 'Kerry',
      'location': [52.022808, -9.495900]
    },
    {
      'name': 'Kerry',
      'location': [52.022819, -9.495447]
    },
    {
      'name': 'Kerry',
      'location': [52.022961, -9.495475]
    },
    {
      'name': 'Kerry',
      'location': [52.023003, -9.495483]
    },
    {
      'name': 'Kerry',
      'location': [52.023042, -9.495722]
    },
    {
      'name': 'Kerry',
      'location': [52.023044, -9.495739]
    },
    {
      'name': 'Kerry',
      'location': [52.023089, -9.495711]
    },
    {
      'name': 'Kerry',
      'location': [52.023828, -9.497550]
    },
    {
      'name': 'Kerry',
      'location': [52.023842, -9.497550]
    },
    {
      'name': 'Kerry',
      'location': [52.024383, -9.503144]
    },
    {
      'name': 'Kerry',
      'location': [52.025464, -9.491886]
    },
    {
      'name': 'Kerry',
      'location': [52.025728, -9.489842]
    },
    {
      'name': 'Kerry',
      'location': [52.025761, -9.489806]
    },
    {
      'name': 'Kerry',
      'location': [52.025906, -9.494719]
    },
    {
      'name': 'Kerry',
      'location': [52.031186, -9.636658]
    },
    {
      'name': 'Kerry',
      'location': [52.033358, -9.516978]
    },
    {
      'name': 'Kerry',
      'location': [52.033433, -9.516992]
    },
    {
      'name': 'Kerry',
      'location': [52.033481, -9.516964]
    },
    {
      'name': 'Kerry',
      'location': [52.033553, -9.516356]
    },
    {
      'name': 'Kerry',
      'location': [52.033564, -9.516345]
    },
    {
      'name': 'Kerry',
      'location': [52.033622, -9.517353]
    },
    {
      'name': 'Kerry',
      'location': [52.033625, -9.517347]
    },
    {
      'name': 'Kerry',
      'location': [52.033628, -9.516728]
    },
    {
      'name': 'Kerry',
      'location': [52.033670, -9.516900]
    },
    {
      'name': 'Kerry',
      'location': [52.033839, -9.516742]
    },
    {
      'name': 'Kerry',
      'location': [52.033889, -9.617289]
    },
    {
      'name': 'Kerry',
      'location': [52.033911, -9.517197]
    },
    {
      'name': 'Kerry',
      'location': [52.033961, -9.517209]
    },
    {
      'name': 'Kerry',
      'location': [52.050025, -9.517364]
    },
    {
      'name': 'Kerry',
      'location': [52.050031, -9.516861]
    },
    {
      'name': 'Kerry',
      'location': [52.050233, -9.500220]
    },
    {
      'name': 'Kerry',
      'location': [52.050553, -9.517175]
    },
    {
      'name': 'Kerry',
      'location': [52.050656, -9.517342]
    },
    {
      'name': 'Kerry',
      'location': [52.058656, -9.517231]
    },
    {
      'name': 'Kerry',
      'location': [52.106397, -9.782875]
    },
    {
      'name': 'Kerry',
      'location': [52.106403, -9.782872]
    },
    {
      'name': 'Kerry',
      'location': [52.106414, -9.781753]
    },
    {
      'name': 'Kerry',
      'location': [52.106439, -9.782853]
    },
    {
      'name': 'Belfast',
      'location': [54.595244, -5.933883]
    },
    {
      'name': 'Belfast',
      'location': [54.595758, -5.934444]
    },
    {
      'name': 'Belfast',
      'location': [54.595997, -5.931050]
    },
    {
      'name': 'Belfast',
      'location': [54.596381, -5.931131]
    },
    {
      'name': 'Belfast',
      'location': [54.596456, -5.929119]
    },
    {
      'name': 'Belfast',
      'location': [54.596500, -5.929150]
    },
    {
      'name': 'Belfast',
      'location': [54.596697, -5.929117]
    },
    {
      'name': 'Belfast',
      'location': [54.596731, -5.930936]
    },
    {
      'name': 'Belfast',
      'location': [54.596747, -5.929158]
    },
    {
      'name': 'Belfast',
      'location': [54.596861, -5.930142]
    },
    {
      'name': 'Belfast',
      'location': [54.596961, -5.929919]
    },
    {
      'name': 'Belfast',
      'location': [54.597014, -5.930242]
    },
    {
      'name': 'Belfast',
      'location': [54.597056, -5.929747]
    },
    {
      'name': 'Belfast',
      'location': [54.597069, -5.930117]
    },
    {
      'name': 'Belfast',
      'location': [54.597108, -5.953781]
    },
    {
      'name': 'Belfast',
      'location': [54.597303, -5.930367]
    },
    {
      'name': 'Belfast',
      'location': [54.597336, -5.929811]
    },
    {
      'name': 'Belfast',
      'location': [54.597644, -5.930169]
    },
    {
      'name': 'Belfast',
      'location': [54.597806, -5.952692]
    },
    {
      'name': 'Belfast',
      'location': [54.597978, -5.952419]
    },
    {
      'name': 'Belfast',
      'location': [54.597992, -5.952344]
    },
    {
      'name': 'Belfast',
      'location': [54.598372, -5.925050]
    },
    {
      'name': 'Belfast',
      'location': [54.598642, -5.949947]
    },
    {
      'name': 'Belfast',
      'location': [54.598833, -5.945142]
    },
    {
      'name': 'Belfast',
      'location': [54.598925, -5.944775]
    },
    {
      'name': 'Belfast',
      'location': [54.598969, -5.948831]
    },
    {
      'name': 'Belfast',
      'location': [54.598989, -5.944472]
    },
    {
      'name': 'Belfast',
      'location': [54.599050, -5.944217]
    },
    {
      'name': 'Belfast',
      'location': [54.599144, -5.947981]
    },
    {
      'name': 'Belfast',
      'location': [54.599164, -5.930061]
    },
    {
      'name': 'Belfast',
      'location': [54.599178, -5.948169]
    },
    {
      'name': 'Belfast',
      'location': [54.599189, -5.930131]
    },
    {
      'name': 'Belfast',
      'location': [54.599531, -5.927256]
    },
    {
      'name': 'Belfast',
      'location': [54.599539, -5.921461]
    },
    {
      'name': 'Belfast',
      'location': [54.599572, -5.946183]
    },
    {
      'name': 'Belfast',
      'location': [54.599581, -5.946133]
    },
    {
      'name': 'Belfast',
      'location': [54.599617, -5.945986]
    },
    {
      'name': 'Belfast',
      'location': [54.599633, -5.945928]
    },
    {
      'name': 'Belfast',
      'location': [54.599667, -5.945794]
    },
    {
      'name': 'Belfast',
      'location': [54.599692, -5.945711]
    },
    {
      'name': 'Belfast',
      'location': [54.599706, -5.945628]
    },
    {
      'name': 'Belfast',
      'location': [54.599736, -5.945522]
    },
    {
      'name': 'Belfast',
      'location': [54.599753, -5.945469]
    },
    {
      'name': 'Belfast',
      'location': [54.599772, -5.945392]
    },
    {
      'name': 'Belfast',
      'location': [54.599931, -5.925942]
    },
    {
      'name': 'Belfast',
      'location': [54.600658, -5.924678]
    },
    {
      'name': 'Belfast',
      'location': [54.600703, -5.924636]
    },
    {
      'name': 'Belfast',
      'location': [54.600717, -5.924628]
    },
    {
      'name': 'Belfast',
      'location': [54.600939, -5.921519]
    },
    {
      'name': 'Belfast',
      'location': [54.600944, -5.924372]
    },
    {
      'name': 'Belfast',
      'location': [54.601017, -5.923828]
    },
    {
      'name': 'Belfast',
      'location': [54.601053, -5.923983]
    },
    {
      'name': 'Belfast',
      'location': [54.601139, -5.923356]
    },
    {
      'name': 'Belfast',
      'location': [54.601222, -5.921339]
    },
    {
      'name': 'Belfast',
      'location': [54.601303, -5.921433]
    },
    {
      'name': 'Belfast',
      'location': [54.601436, -5.921683]
    },
    {
      'name': 'Belfast',
      'location': [54.601453, -5.921625]
    },
    {
      'name': 'Belfast',
      'location': [54.601461, -5.921617]
    },
    {
      'name': 'Belfast',
      'location': [54.601567, -5.923444]
    },
    {
      'name': 'Lough Neagh',
      'location': [54.714789, -6.239639]
    },
    {
      'name': 'Lough Neagh',
      'location': [54.714956, -6.240406]
    },
    {
      'name': 'Lough Neagh',
      'location': [54.715194, -6.240239]
    },
    {
      'name': 'Lough Neagh',
      'location': [54.716264, -6.238892]
    },
    {
      'name': 'Derry',
      'location': [54.993858, -7.325947]
    },
    {
      'name': 'Derry',
      'location': [54.995056, -7.324550]
    },
    {
      'name': 'Derry',
      'location': [54.995072, -7.325228]
    },
    {
      'name': 'Derry',
      'location': [54.995081, -7.324383]
    },
    {
      'name': 'Derry',
      'location': [54.995392, -7.324339]
    },
    {
      'name': 'Derry',
      'location': [54.996022, -7.323025]
    },
    {
      'name': 'Derry',
      'location': [54.997347, -7.320103]
    },
    {
      'name': 'Derry',
      'location': [54.997456, -7.320031]
    },
    {
      'name': 'Derry',
      'location': [54.997872, -7.319111]
    },
    {
      'name': 'Derry',
      'location': [54.999236, -7.319586]
    },
    {
      'name': 'Bishops Rd',
      'location': [55.150239, -6.879328]
    },
    {
      'name': 'Bishops Rd',
      'location': [55.152689, -6.861950]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.163678, -6.810819]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.163806, -6.810272]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.164028, -6.810519]
    },
    {
      'name': 'Downhill Demesne',
      'location': [55.167078, -6.830189]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.167508, -6.811344]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.167569, -6.811142]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.167633, -6.811003]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.167647, -6.810900]
    },
    {
      'name': 'Mussenden Temple',
      'location': [55.167794, -6.810894]
    },
    {
      'name': 'Downhill Demesne',
      'location': [55.167808, -6.829758]
    },
    {
      'name': 'Portrush',
      'location': [55.209358, -6.654103]
    },
    {
      'name': 'Portrush',
      'location': [55.209372, -6.654242]
    },
    {
      'name': 'Dunluce Castle',
      'location': [55.210411, -6.578375]
    },
    {
      'name': 'Dunluce Castle',
      'location': [55.210836, -6.579339]
    },
    {
      'name': 'Dunluce Castle',
      'location': [55.211483, -6.579056]
    },
    {
      'name': 'Smugglers Inn',
      'location': [55.234094, -6.510481]
    },
    {
      'name': 'Smugglers Inn',
      'location': [55.234247, -6.510433]
    },
    {
      'name': 'Glasgow',
      'location': [55.861008, -4.251311]
    },
    {
      'name': 'Glasgow',
      'location': [55.861089, -4.249589]
    },
    {
      'name': 'Glasgow',
      'location': [55.862675, -4.235428]
    },
    {
      'name': 'Glasgow',
      'location': [55.862756, -4.236572]
    },
    {
      'name': 'Glasgow',
      'location': [55.862792, -4.235067]
    },
    {
      'name': 'Glasgow',
      'location': [55.862808, -4.236558]
    },
    {
      'name': 'Glasgow',
      'location': [55.862883, -4.234975]
    },
    {
      'name': 'Glasgow',
      'location': [55.862894, -4.235181]
    },
    {
      'name': 'Glasgow',
      'location': [55.862972, -4.234617]
    },
    {
      'name': 'Glasgow',
      'location': [55.863003, -4.234019]
    },
    {
      'name': 'Glasgow',
      'location': [55.865000, -4.261339]
    },
    {
      'name': 'Edinburgh',
      'location': [55.947956, -3.199550]
    },
    {
      'name': 'Edinburgh',
      'location': [55.947986, -3.199669]
    },
    {
      'name': 'Edinburgh',
      'location': [55.947992, -3.199675]
    },
    {
      'name': 'Edinburgh',
      'location': [55.947994, -3.199786]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948108, -3.199797]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948119, -3.199586]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948169, -3.199494]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948192, -3.199517]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948200, -3.199506]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948219, -3.199611]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948233, -3.200219]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948314, -3.199603]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948408, -3.200192]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948467, -3.200844]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948475, -3.200167]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948503, -3.200272]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948508, -3.200317]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948519, -3.200333]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948528, -3.200317]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948561, -3.200839]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948639, -3.199731]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948725, -3.199925]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948731, -3.200172]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948764, -3.199492]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948789, -3.201919]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948794, -3.198853]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948806, -3.200261]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948808, -3.201625]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948828, -3.201806]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948831, -3.200225]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948833, -3.200261]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948842, -3.200150]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948844, -3.201928]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948847, -3.201967]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948853, -3.201925]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948878, -3.201239]
    },
    {
      'name': 'Edinburgh',
      'location': [55.948992, -3.197519]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949025, -3.200739]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949028, -3.200017]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949033, -3.200006]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949064, -3.200408]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949078, -3.200803]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949083, -3.200342]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949100, -3.200631]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949108, -3.200272]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949122, -3.200331]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949128, -3.200289]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949142, -3.200306]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949175, -3.200214]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949200, -3.200158]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949219, -3.194411]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949428, -3.191622]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949442, -3.192564]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949444, -3.192569]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949447, -3.192614]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949486, -3.191864]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949522, -3.192367]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949533, -3.192336]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949539, -3.192247]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949544, -3.192456]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949550, -3.192442]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949597, -3.191481]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949600, -3.192250]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949606, -3.191453]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949736, -3.194667]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949781, -3.197747]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949797, -3.197728]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949822, -3.190133]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949917, -3.202958]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949969, -3.194967]
    },
    {
      'name': 'Edinburgh',
      'location': [55.949994, -3.202892]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950014, -3.202972]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950136, -3.197306]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950147, -3.202708]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950156, -3.197283]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950167, -3.194856]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950178, -3.190275]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950186, -3.197244]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950206, -3.197222]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950211, -3.197214]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950225, -3.197194]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950228, -3.197192]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950231, -3.197192]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950236, -3.197181]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950256, -3.197158]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950267, -3.197144]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950275, -3.201653]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950278, -3.197131]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950283, -3.197122]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950286, -3.197119]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950289, -3.197117]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950294, -3.197111]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950297, -3.197108]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950306, -3.201647]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950314, -3.201625]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950317, -3.197083]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950325, -3.197072]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950339, -3.197056]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950344, -3.197050]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950350, -3.197042]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950361, -3.197028]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950375, -3.197008]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950381, -3.197006]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950383, -3.197000]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950386, -3.197000]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950389, -3.196994]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950394, -3.196986]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950408, -3.196969]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950411, -3.196967]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950433, -3.196939]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950436, -3.196936]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950439, -3.196933]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950442, -3.196928]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950444, -3.196925]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950767, -3.199144]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950856, -3.202253]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950908, -3.202569]
    },
    {
      'name': 'Edinburgh',
      'location': [55.950986, -3.202731]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951011, -3.195297]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951031, -3.206367]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951128, -3.198056]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951131, -3.202978]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951153, -3.195369]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951156, -3.202858]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951169, -3.197822]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951172, -3.197119]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951214, -3.197550]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951219, -3.196575]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951239, -3.197211]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951300, -3.189025]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951306, -3.196064]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951397, -3.195883]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951417, -3.195300]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951450, -3.195431]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951700, -3.206692]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951708, -3.206686]
    },
    {
      'name': 'Edinburgh',
      'location': [55.951858, -3.206786]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952083, -3.206867]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952117, -3.194350]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952214, -3.193808]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952239, -3.193453]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952244, -3.193453]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952294, -3.193264]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952306, -3.193325]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952325, -3.193317]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952344, -3.193431]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952361, -3.193242]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952369, -3.193158]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952375, -3.193158]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952383, -3.193269]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952386, -3.193303]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952392, -3.193286]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952394, -3.193242]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952400, -3.193253]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952403, -3.193319]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952417, -3.193269]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952419, -3.193258]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952422, -3.193261]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952428, -3.193250]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952442, -3.193342]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952444, -3.193236]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952450, -3.193358]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952458, -3.193233]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952461, -3.193225]
    },
    {
      'name': 'Edinburgh',
      'location': [55.952650, -3.207231]
    },
    {
      'name': 'Edinburgh',
      'location': [55.953167, -3.209747]
    },
    {
      'name': 'Edinburgh',
      'location': [55.953442, -3.207806]
    },
    {
      'name': 'Edinburgh',
      'location': [55.953872, -3.209375]
    },
    {
      'name': 'Edinburgh',
      'location': [55.954039, -3.209153]
    },
    {
      'name': 'Edinburgh',
      'location': [55.954100, -3.208444]
    },
    {
      'name': 'Edinburgh',
      'location': [55.954125, -3.208328]
    },
    {
      'name': 'Edinburgh',
      'location': [55.954297, -3.207467]
    },
    {
      'name': 'Edinburgh',
      'location': [55.954911, -3.207444]
    },
    {
      'name': 'Edinburgh',
      'location': [55.955758, -3.193750]
    }
  ]
};
