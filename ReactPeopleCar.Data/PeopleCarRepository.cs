using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace ReactPeopleCar.Data
{
     public class PeopleCarRepository
    {
        private string _connectionString;
        public PeopleCarRepository(string cs)
        {
            _connectionString = cs;
        }
        public List<Person> GetPeople()
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.Include(c => c.Cars).ToList();
            }
        }
        public void AddPerson(Person p)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Add(p);
                context.SaveChanges();
            }
        }
        public void AddCars(Cars c)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.Cars.Add(c);
                context.SaveChanges();
            }
        }
        public void DeleteCars(int id)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.Database.ExecuteSqlCommand("delete from Cars where PersonId = @id",
                    new SqlParameter("@id", id));
            }
        }
        public List<Cars> GetCars(int id)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.Cars.Where(c => c.PersonId == id).ToList();
            }
        }
    }
}
