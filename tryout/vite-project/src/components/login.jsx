<div className="max-w-2xl mx-auto py-20">
  <div className=" bg-white drop-shadow-md p-5 w-full">
    <h1 className=" font-semibold">Login</h1>
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col space-y-1">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-1 w-full">
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
        />
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="bg-gray-300 px-5 py-2 rounded-md font-medium disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Login
      </button>
    </form>
  </div>
</div>;
