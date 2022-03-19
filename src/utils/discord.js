const defaultOptions = (token_type, access_token) => ({
  method: "GET",
  headers: {
    "Authorization": `${token_type} ${access_token}`,
  }
});

export default async function discord(
  endpoint,
  token_type,
  access_token,
  options = defaultOptions(token_type, access_token)
) {
  const res = await fetch(`https://discord.com/api/v9${endpoint}`, options);
  const data = await res.json();

  return data
}