export interface MetaData {
  path?: string;
  title?: string;
  description?: string;
  openGraphType?: string;
  twitterCard?: string;
  image?: {
    imagePath: string;
    imageAlt: string;
  };
}

export interface SimpleContentType {
  description: string;
  image: {
    imagePath: string;
    imageAlt: string;
  };
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
      contents: ContentTypesWidget[];
    };
  };
}

export interface SimplePageQueryResult {
  markdownRemark: {
    frontmatter: {
      metaData: MetaData;
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
