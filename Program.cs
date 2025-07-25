using Microsoft.EntityFrameworkCore;
using StudyStacker.Data;

var builder = WebApplication.CreateBuilder(args);

// Registers OpenAPI/Swagger
builder.Services.AddOpenApi();

// Registers controllers support (for API endpoints)
builder.Services.AddControllers();

// Registers DbContext with SQLite connection string
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=flashcards.db"));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();
app.UseCors();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi(); 
}

// app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();
app.Run();