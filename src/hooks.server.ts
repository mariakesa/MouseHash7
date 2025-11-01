import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { env } from "$env/dynamic/private"

export const { handle } = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: env.GITHUB_ID || "your-github-client-id",
      clientSecret: env.GITHUB_SECRET || "your-github-client-secret"
    })
  ],
  trustHost: true
})
