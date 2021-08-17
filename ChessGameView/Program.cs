using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChessGameCore;

namespace ChessGameView
{

    public class Program
    {
        public static void Main(string[] args)
        {

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }

    //public class Program
    //{
    //    public static void Main(string[] args)
    //    {
    //        GameManager Core = new();

    //        Core.CreateGame("Magnus", new Player("Magnus", "Carlsen"));

    //        Core.ChessGames["Magnus"].Board.BoardMap[6, 0].AllPossibleMoves();

    //        Console.WriteLine(Core.ChessGames["Magnus"].Board.BoardMap[6, 0].movesInfo[0].PosX);
    //    }
    //}

}
