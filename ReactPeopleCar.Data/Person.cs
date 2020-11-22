using System;
using System.Collections.Generic;
using System.Text;

namespace ReactPeopleCar.Data
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public List<Cars> Cars { get; set; }
    }
}
