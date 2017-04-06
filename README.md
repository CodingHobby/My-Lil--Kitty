### My LIL' CAT

My LIL'CAT, which is short for **My Largly Intricated Library 'n' Cool Artificial Things**, is a JavaScript based Physics library, which is written using ES6 "class" Syntax - it is not yet webpack transpiled, although I'd love to do that in the future... If any of you could help me with that it would be great.

For now there are three main classes: 
- `Vector` 
- `Body` 
- `World`

Here they are listed in an ascending order of complexity: a vector is the core unit, on top of which you can make Bodies, which are, for nows, just rigid bodies.

The bodies have a lot of properties and methods which rely heavily on Vectors.

Then there is the `World` class, which contains all of its "children" `Bodies`, and it also has stuff like Gravity, which it then passes down to each one of its children.

Everything is being tested through Jest, although I started using it only recently, so up until now there has not been any TDD / Red Green Refractor type of thing going on, although I'll be doing it, from now on.

If you want to contribute I'd be grateful! Do not hesitate to fork this repo, if you want to help a poor noobie with his little side-project!

If you want to know the state of development, check out the TODO.todo file: it will list all the stuff I'm currently doing, or all the stuff I have done. If you want to open it using a pleasing graphic, you should use some extension like "To Do Tasks", which is available for most major text editors.