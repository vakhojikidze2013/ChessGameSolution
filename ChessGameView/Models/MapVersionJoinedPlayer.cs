using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessGameView.Models
{
    public class MapVersionJoinedPlayer
    {
        public int VersionBoardMap { get; set; }

        public int VersionGameList { get; set; }

        public bool JoinedPlayer { get; set; }

    }
}
