using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudyStacker_295038.Migrations
{
    /// <inheritdoc />
    public partial class AddDecksDescription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flashcards_Deck_DeckID",
                table: "Flashcards");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Deck",
                table: "Deck");

            migrationBuilder.RenameTable(
                name: "Deck",
                newName: "Decks");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Decks",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Decks",
                table: "Decks",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Flashcards_Decks_DeckID",
                table: "Flashcards",
                column: "DeckID",
                principalTable: "Decks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flashcards_Decks_DeckID",
                table: "Flashcards");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Decks",
                table: "Decks");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Decks");

            migrationBuilder.RenameTable(
                name: "Decks",
                newName: "Deck");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Deck",
                table: "Deck",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Flashcards_Deck_DeckID",
                table: "Flashcards",
                column: "DeckID",
                principalTable: "Deck",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
