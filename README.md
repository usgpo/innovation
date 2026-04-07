# Innovation Hub

The Innovation Hub seeks to highlight Legislative branch activities that use technology to cultivate collaboration, foster data standardization, and increase transparency. The Hub includes information to help law-making bodies innovate, communicate, and legislate effectively, and it is being developed iteratively by non-partisan support staff in United States Legislative branch organizations coordinated through the Congressional Data Task Force in collaboration with civil society using GitHub Pages.  

This domain is published on [GitHub pages][pages],
based on [Ruby] and [Jekyll].

[pages]: https://pages.github.com
[Ruby]: https://www.ruby-lang.org/en/
[Jekyll]: https://jekyllrb.com

## Run locally.

> [!TIP]
> A [Development Container](https://containers.dev/) is available as an
> alternative to installing all the tooling and dependencies directly on your
> workstation.

Run `make dev`.

> [!TIP]
> A `flake.nix` is included for users of the [Nix package manager][nix] ([][nix-dl]).
> This describes a [nix develop] shell, for any users who enable [nix command].

[nix]: https://nixos.org/
[nix-dl]: https://nixos.org/download/
[nix develop]: https://nix.dev/manual/nix/2.26/command-ref/new-cli/nix3-develop
[nix command]: https://nixos.wiki/wiki/Nix_command

If you choose to run the code directly, you need [Ruby on your machine][ruby-dl],
then run:

```shell
gem install bundler
```

[ruby-dl]: https://www.ruby-lang.org/en/documentation/installation/

Any of these options prepares you to run the app, using:

```shell
bundle
bundle exec jekyll serve
```
[(you'll see your app here)](http://127.0.0.1:4000/innovation/).

## Proposing Changes

As coordinated by the Congressional Data Task Force (CDTF),
changes can be proposed to the Innovation Hub's online domain
using [GitHub's pull-request process][pr].
Please [open an issue][issue] for any errors you see on your machine.

[pr]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

[issue]: https://github.com/usgpo/innovation/issues/new
