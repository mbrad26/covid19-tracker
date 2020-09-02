import React from 'react';
import { render, screen } from '@testing-library/react';

import { article } from '../../fixtures';
import Article from '../../../components/News/Article';

describe('Article', () => {
  it('renders a snapshot', () => {
    const { container } = render(<Article article={article} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the correct props', () => {
    render(<Article article={article} />);

    screen.debug();

    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveAttribute(
      'src',
      `${article.urlToImage}`,
    );
    expect(screen.getByTestId('image')).toHaveAttribute(
      'class',
      `card-img-top`,
    );
    expect(screen.getByText(/Casa pivots to provide self-custody/)).toBeInTheDocument();
    expect(screen.getByText(/Thu Aug 06 2020/)).toBeInTheDocument();
    expect(screen.getByText(/a Colorado-based provider of bitcoin security services/)).toBeInTheDocument();
    expect(screen.getByText(/Read full article/)).toBeInTheDocument();
    expect(screen.getByText(/Read full article/)).toHaveAttribute(
      'href',
      `${article.url}`,
    );
  });
});
