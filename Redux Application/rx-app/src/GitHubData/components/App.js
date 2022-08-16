import React from 'react';
import { connect } from 'react-redux';

export function App({ data }) {
if(data.isLoading) {
        return (
          <div>
            Data Loading...
          </div>
        )
  }
  return (
    <div>
      <div>
        Name: { data.login }
      </div>
      <br />
      <div>
        Blog: { data.blog }
      </div>
      <br />
      <div>
        Github Followers: { data.followers }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isLoading:state.isLoading
  };
};

export default connect(
  mapStateToProps,
)(App);



