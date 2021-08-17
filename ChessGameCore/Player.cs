using System;

namespace ChessGameCore
{
    public class Player
    {

        public Player(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        public string FirstName { get; }

        public string LastName { get; }


        public int pastPing = 0;


        public int lastPing = 60;


        public int playTime = 180;


        private FigureColor figuresControllColor;

        public void SetFiguresControllColor(FigureColor value)
        {
            figuresControllColor = value;
        }

        public void lastPingActive()
        {
            lastPing++;
        }

        public void pastPingActive()
        {
            pastPing++;
        }
    }
}
