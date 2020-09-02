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

    // expect(container.firstChild).toMatchSnapshot();
  });
});
