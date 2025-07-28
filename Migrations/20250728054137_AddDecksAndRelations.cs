using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudyStacker_295038.Migrations
{
    /// <inheritdoc />
    public partial class AddDecksAndRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DeckID",
                table: "Flashcards",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Deck",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Deck", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Flashcards_DeckID",
                table: "Flashcards",
                column: "DeckID");

            migrationBuilder.AddForeignKey(
                name: "FK_Flashcards_Deck_DeckID",
                table: "Flashcards",
                column: "DeckID",
                principalTable: "Deck",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flashcards_Deck_DeckID",
                table: "Flashcards");

            migrationBuilder.DropTable(
                name: "Deck");

            migrationBuilder.DropIndex(
                name: "IX_Flashcards_DeckID",
                table: "Flashcards");

            migrationBuilder.DropColumn(
                name: "DeckID",
                table: "Flashcards");
        }
    }
}
