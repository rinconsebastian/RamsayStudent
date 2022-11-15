using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using RamsayStudents.Data;

namespace RamsayStudents.Models
{
    public class Student
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        public string Username { get; set; }

        public string FirstName { get; set; }

        public string lastName { get; set; }

        public int Age { get; set; }

        public string Career { get; set; }
    }


}
