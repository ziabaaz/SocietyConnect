using Microsoft.EntityFrameworkCore;

namespace SocietyConnect.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<User> Users { get; set; }
    }
}