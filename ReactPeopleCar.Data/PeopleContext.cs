using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactPeopleCar.Data
{
   public class PeopleContext : DbContext
    {
        private string _connectionString;
        public PeopleContext(string cs)
        {
            _connectionString = cs;
        }
        public DbSet<Person> People { get; set; }
        public DbSet<Cars> Cars { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

    }
}
