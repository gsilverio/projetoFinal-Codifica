import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";

const Comments = ({ comments }) => {
  return (
    <section>
      {comments.length === 0 ? (
        <p className="text-center">Ainda não possui avaliação.</p>
      ) : (
        comments.map((comment, index) => {
          return (
            <MDBCard key={index} className="mb-3 text-dark">
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Usuário
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        {[...Array(5)].map((_, starIndex) => (
                          <MDBIcon
                            key={starIndex}
                            fas
                            icon="star"
                            // className={starIndex < comment.rating ? 'text-danger' : 'text-muted'}
                            style={{
                              color:
                                starIndex < comment.rating
                                  ? "#FFD700"
                                  : "#D3D3D3",
                              fontSize: "18px",
                            }}
                          />
                        ))}
                      </p>
                    </div>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          );
        })
      )}
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comments;
