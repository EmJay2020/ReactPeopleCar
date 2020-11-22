using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactPeopleCar.Data;
using Microsoft.Extensions.Configuration;
using ReactPeopleCar.Web.Models;

namespace ReactPeopleCar.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PplCarsController : ControllerBase
    {
        private string _connectionString;
        public PplCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("getpeople")]
        public List<Person> GetPeople()
        {
            var repo = new PeopleCarRepository(_connectionString);
            return repo.GetPeople();
        }
        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person p)
        {
            var repo = new PeopleCarRepository(_connectionString);
            repo.AddPerson(p);
        }
        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(CarViewModel id)
        {
            var repo = new PeopleCarRepository(_connectionString);
            repo.DeleteCars(id.Id);
        }
        [HttpPost]
        [Route("addcar")]
        public void AddCar(Cars c)
        {
            var repo = new PeopleCarRepository(_connectionString);
            repo.AddCars(c);
        }
        [HttpGet]
        [Route("getcars")]
        public List<Cars> GetCars(int id)
        {
            var repo = new PeopleCarRepository(_connectionString);
            return repo.GetCars(id);
        }
    }
}