import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store';
import { articles } from '../../fixtures';
import News from '../../../components/News/News';

describe('News', () => {
  const newsProps = {
    isError: false,
    isLoading: false,
    articles: articles,
    loadingNewsData: jest.fn()
  };

  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <News {...newsProps} />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
