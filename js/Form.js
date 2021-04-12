class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);

        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');

        input.position(330, 160);
        button.position(350, 200);
        button.mousePressed(() => {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            //player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position(330, 160);

        })
    }
}