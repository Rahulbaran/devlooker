export default function SearchForm({ user, handleUser, handleSubmit }) {
  return (
    <section className="form-section">
      <form
        className="search-form"
        spellCheck="false"
        autoComplete="off"
        autoCapitalize="off"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          name="username"
          placeholder="enter github username"
          required
          value={user}
          onChange={handleUser}
        />

        <button type="submit" className="btn search-btn">
          Search
        </button>
      </form>
    </section>
  );
}
