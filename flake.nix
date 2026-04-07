{ inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (arch: let
      pkgs = import nixpkgs { system = arch; };
    in with pkgs; {
    devShells.default = mkShell {
      packages = with pkgs; [ ruby inotify-tools ];
    };
  });
}
