using Microsoft.Extensions.Hosting;
using ChessGameCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;

namespace ChessGameView.Scheduler
{
    public class TimeService : IHostedService, IDisposable
    {
        private float _updateTimeInSeconds = 1.06F;
        private int _secondUpdateTimeInSeconds = 1;
        private Timer _timer;

        private readonly GameManager _gamemanager;

        public TimeService(GameManager gameManager)
        {
            _gamemanager = gameManager;
        }
        
        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(CheckPlayerPing, null, TimeSpan.Zero, TimeSpan.FromSeconds(_updateTimeInSeconds));
            _timer = new Timer(ChessGameTime, null, TimeSpan.Zero, TimeSpan.FromSeconds(_secondUpdateTimeInSeconds));
            return Task.CompletedTask;
        }


        public Task StopAsync(CancellationToken cancellationToken)
        {
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }

        private void CheckPlayerPing(object state)
        {
            _gamemanager.CheckPlayersPing();
        }
        
        private void ChessGameTime(object state)
        {
            _gamemanager.CheckerGameTime();
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }

    }
}
