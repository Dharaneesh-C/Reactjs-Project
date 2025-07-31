import React, { Component } from "react";
import Newsitems from "./Newsitems";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "science",
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/everything?q=apple&from=2025-07-23&to=2025-07-23&sortBy=popularity&apiKey=c45ddf5c722d4b6ba8449ae0c4205619&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNext = async () => {
    const nextPage = this.state.page + 1;
    this.setState({ loading: true });

    const url = `https://newsapi.org/v2/everything?q=apple&from=2025-07-23&to=2025-07-23&sortBy=popularity&apiKey=c45ddf5c722d4b6ba8449ae0c4205619&page=${nextPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: nextPage,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlePrev = async () => {
    const prevPage = this.state.page - 1;
    if (prevPage < 1) return;

    this.setState({ loading: true });

    const url = `https://newsapi.org/v2/everything?q=apple&from=2025-07-23&to=2025-07-23&sortBy=popularity&apiKey=c45ddf5c722d4b6ba8449ae0c4205619&page=${prevPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: prevPage,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center text-danger">Live News</h1>
        {this.state.loading && <Spinner />}

        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title}
                    description={element.description}
                    url={element.urlToImage}
                    linkUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-danger me-md-2"
              type="button"
              onClick={this.handlePrev}
              disabled={this.state.page <= 1}
            >
              &laquo; Prev
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.handleNext}
            >
              Next &raquo;
            </button>
          </div>

          <br />
        </div>
      </>
    );
  }
}
