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

  it('renders the correct props when isLoading', () => {
    const newsProps = {
      isError: false,
      isLoading: true,
      articles: [],
      loadingNewsData: jest.fn()
    };

    render(
      <Provider store={store} >
        <News {...newsProps} />
      </Provider>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveAttribute(
      'class',
      'spinner-border text-dark'
    );
  });

  it('renders the correct props when isError', () => {
    const newsProps = {
      isError: true,
      isLoading: false,
      articles: [],
      loadingNewsData: jest.fn()
    };

    render(
      <Provider store={store} >
        <News {...newsProps} />
      </Provider>
    );

    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
  });

  it('renders the correct props when isLoading', () => {
    const newsProps = {
      isError: false,
      isLoading: false,
      articles: articles,
      loadingNewsData: jest.fn()
    };

    render(
      <Provider store={store} >
        <News {...newsProps} />
      </Provider>
    );

    expect(screen.getAllByTestId('image').length).toEqual(3);
    expect(screen.getAllByTestId('image')[0]).toHaveAttribute(
      'src',
      `${articles[0].urlToImage}`
    );
    expect(screen.getAllByTestId('image')[1]).toHaveAttribute(
      'src',
      `${articles[1].urlToImage}`
    );
    expect(screen.getAllByTestId('image')[2]).toHaveAttribute(
      'src',
      `${articles[2].urlToImage}`
    );
  });
});
