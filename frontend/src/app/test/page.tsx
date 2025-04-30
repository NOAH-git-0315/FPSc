'use client';
console.log(document.cookie);
const discordClientId = '1366417359237025823';
const backendRedirectUri = 'http://localhost:8080/login/oauth2/code/discord';

export default function LoginPage() {
  const loginWithDiscord = () => {
    const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${discordClientId}` +
      `&redirect_uri=${encodeURIComponent(backendRedirectUri)}` +
      `&response_type=code` +
      `&scope=identify`;

    window.location.href = 'http://localhost:8080/oauth2/authorization/discord';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button onClick={loginWithDiscord}>Discordでログイン</button>
    </div>
  );
}