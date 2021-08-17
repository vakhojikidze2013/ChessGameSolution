using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace ChessGameView
{

    public class HubClass : Hub
    {
        public async Task Send(string info)
        {
            await this.Clients.All.SendAsync("Send", info);
        }
    }
}