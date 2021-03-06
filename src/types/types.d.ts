interface Image {
  imagePath: string;
  imageAlt: string;
}

export interface MetaData {
  description?: string;
  openGraphType?: string;
  twitterCard?: string;
  image?: Image;
}

export interface SimpleContentType {
  description: string;
  image: Image;
  title: string;
}

export interface TextType {
  title: string;
  text: string;
}

export interface ContentTypesWidget {
  contentTypesWidget: {
    simpleContent?: SimpleContentType;
    text?: TextType;
  };
}

export interface ContentfulPageQueryResult {
  markdownRemark: {
    frontmatter: {
      metaData: MetaData;
      title: string;
      path: string;
      contents: ContentTypesWidget[];
    };
  };
}

export interface FeatureQueryResult {
  markdownRemark: {
    frontmatter: {
      metaData: MetaData;
      title: string;
      path: string;
      description: string;
      image: Image;
    };
  };
}

export interface SimplePageQueryResult {
  markdownRemark: {
    frontmatter: {
      metaData: MetaData;
      title: string;
      path: string;
    };
    html: string;
  };
}

export interface Link {
  linkName: string;
  linkPath: string;
}

export interface FooterSection {
  title: string;
  links: Link[];
}

export interface FooterQueryResult {
  markdownRemark: {
    frontmatter: {
      sections: FooterSection[];
    };
  };
}

export interface HeaderSection {
  title: string;
  links?: Link[];
  linkPath?: string;
}

export interface HeaderQueryResult {
  markdownRemark: {
    frontmatter: {
      sections: HeaderSection[];
    };
  };
}
