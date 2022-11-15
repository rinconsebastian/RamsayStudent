using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RamsayStudents.Models;

namespace RamsayStudents.Data
{
    public class ApplicationDbContext : DbContext
    {

        protected readonly IConfiguration Configuration;

        public ApplicationDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {

            options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
        }

        public DbSet<Student> Student { get; set; }
    }
}
