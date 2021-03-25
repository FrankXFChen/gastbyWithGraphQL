module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-pg",
      options: {
        connectionString: "postgres://postgres:admin01@localhost:5432/postgres",
        schema: "public",
        refetchInterval: 60, // Refetch data every 60 seconds
      },
    }
  ],
  
};
// postgresql://postgres:postgres@localhost:1921/postgres
// postgres://user:pass@host/dbname