using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreGames.Models
{
    public class Game
    {
        public string Name { get; set; }
        public string Url { get; set; }
    }
}