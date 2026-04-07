# Innovation Hub

The Innovation Hub seeks to highlight Legislative branch activities that use technology to cultivate collaboration, foster data standardization, and increase transparency. The Hub includes information to help law-making bodies innovate, communicate, and legislate effectively, and it is being developed iteratively by non-partisan support staff in United States Legislative branch organizations coordinated through the Congressional Data Task Force in collaboration with civil society using GitHub Pages.  

## Proposing Changes

As coordinated by the Congressional Data Task Force (CDTF),
changes can be proposed to the Innovation Hub's online domain
using [GitHub's pull-request process][pr].

[pr]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

The publishing process relies on [GitHub pages][pages],
which uses [Ruby] and [Jekyll].

[pages]: https://pages.github.com
[Ruby]: https://www.ruby-lang.org/en/
[Jekyll]: https://jekyllrb.com

## Local Copy

In case you plan to make changes,
please clone a local copy of the codebase.

To run your copy, you need [the Ruby language on your machine][ruby-dl].

[ruby-dl]: https://www.ruby-lang.org/en/documentation/installation/

> A `flake.nix` is included for users of the [Nix package manager][nix] ([][nix-dl]).
> This describes a [nix develop] shell, for any users who enable [nix command].

[nix]: https://nixos.org/
[nix-dl]: https://nixos.org/download/
[nix develop]: https://nix.dev/manual/nix/2.26/command-ref/new-cli/nix3-develop
[nix command]: https://nixos.wiki/wiki/Nix_command

The procedure for rendering the app is as such;
please [ask for guidance][issue] in case of errors on your machine.

[issue]: https://github.com/usgpo/innovation/issues/new

1. Pull dependencies

```shell
gem install bundler
bundle
```

2. Compile the pages once.

```shell
bundle exec github-pages build
```

3. Re-compile on each change to the code.

```shell
bundle exec jekyll build --watch
```

4. Examine your changes.

You can replace the command from (3) with another Jekyll sub-command...
[(you'll see your app here)](http://127.0.0.1:4000/innovation/index.html).

```shell
bundle exec jekyll serve
```

...or use any file relay on `./_site`;
the corresponding [miniserve] command is an example
of how to clean up `/index.html` from the address bar:

```shell
miniserve ./_site --route-prefix innovation/ --index index.html
```

[miniserve]: https://github.com/svenstaro/miniserve
