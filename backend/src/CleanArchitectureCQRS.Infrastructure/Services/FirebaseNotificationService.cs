
using SaveMe.Shared.Abstractions.Interfaces;
using Firebase.Database;
using FirebaseAdmin.Messaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaveMe.Infrastructure.Services
{
    public class FirebaseNotificationService : INotificationService
    {
        public async Task SendNotificationAsync(string title, string messageBody, string token)
        {
            var message = new Message()
            {
                Notification = new Notification
                {
                    Title = title,
                    Body = messageBody
                },
                Token = token
            };

            string response = await FirebaseMessaging.DefaultInstance.SendAsync(message);
        }
    }

}
