using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaveMe.Shared.Abstractions.Interfaces
{
    public interface INotificationService
    {
        Task SendNotificationAsync(string title, string messageBody, string token);
    }
}
