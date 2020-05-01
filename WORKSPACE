# Bazel workspace created by @bazel/create 0.41.0

# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "googlemaps_js_samples",
    # Map the @npm bazel workspace to the node_modules directory.
    # This lets Bazel use the same node_modules as other local tooling.
    managed_directories = {"@npm": ["node_modules"]},
)

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Fetch rules_nodejs so we can install our npm dependencies
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "d14076339deb08e5460c221fae5c5e9605d2ef4848eee1f0c81c9ffdc1ab31c1",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.6.1/rules_nodejs-1.6.1.tar.gz"],
)

# Fetch sass rules for compiling sass files
http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "c78be58f5e0a29a04686b628cf54faaee0094322ae0ac99da5a8a8afca59a647",
    strip_prefix = "rules_sass-1.25.0",
    urls = [
        "https://github.com/bazelbuild/rules_sass/archive/1.25.0.zip",
        "https://mirror.bazel.build/github.com/bazelbuild/rules_sass/archive/1.25.0.zip",
    ],
)

# Check the bazel version and download npm dependencies
load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")

# Setup the Node.js toolchain & install our npm dependencies into @npm
npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

# Install all bazel dependencies of our npm packages
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

# Setup the rules_sass toolchain
load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

http_archive(
    name = "rules_pkg",
    sha256 = "4ba8f4ab0ff85f2484287ab06c0d871dcb31cc54d439457d28fd4ae14b18450a",
    url = "https://github.com/bazelbuild/rules_pkg/releases/download/0.2.4/rules_pkg-0.2.4.tar.gz",
)

load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")

rules_pkg_dependencies()
