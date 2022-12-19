# rock-paper-scissors

Rock paper scissors in JS!

Areas for potential improvement (in order of impact):
- Increment playerScore and computerScore with a single condition (if rock & paper)
- I currently count draws. Might simplify things if I don't, but also is nice to see how many you get
- If you want to change rps to some other things, you could template literal playerSelection in the roundResult. I like that the result message is specific to the choices though ("paper covers rock" etc)
- None of the other solutions dynamically create the result divs, merely change the textContent of an existing div. Not sure if there are benefits here, but they also have heavily designed interfaces, for which dynamically creating DOM might prove difficult or impossible