export default function SearchForm() {
  return (
    <section className="form-section">
      <form
        className="search-form"
        spellCheck="false"
        autoComplete="off"
        autoCapitalize="off"
      >
        <input
          type="search"
          name="username"
          placeholder="enter github username"
          required
        />

        <button type="submit" className="btn search-btn">
          Search
        </button>
      </form>
    </section>
  );
}
