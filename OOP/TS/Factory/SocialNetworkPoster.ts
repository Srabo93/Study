export interface SocialNetworkConnector {
  logIn(): void;
  createPost(content: string): void;
  logOut(): void;
}

export abstract class SocialNetworkPoster {
  public abstract getSocialNetwork(): SocialNetworkConnector;

  public post(content: string) {
    const network = this.getSocialNetwork();
    network.logIn();
    network.createPost(content);
    network.logOut();
  }
}
