interface testimony {
  id: number
  attributes: {
    clientRating: number;
    clientName: string;
    clientTestimony: string;
    clientImage?: string | undefined;
  }
}
interface AboutUs {
  id: number
  attributes: {
    aboutHeading: string;
    aboutDetails: string;
    aboutImage: string;
  }
}

interface Showcase {
  id: number
  attributes: {
    showcaseUrl: string;
  }
}

export type { testimony, AboutUs, Showcase }