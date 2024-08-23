// src/components/Reviews.jsx
import React from 'react';

function Reviews() {
  return (
    <section class="box-content Reviews">
                    <div class="reviews-list">
                        <div class="comments-form">
                            <h2>Leave a Comment</h2>
                            <form action="#" method="post">
                                <div class="form-group">
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" name="name" required/>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Comment:</label>
                                    <textarea id="comment" name="comment" rows="4" required></textarea>
                                </div>
                                <button type="submit" class="btn-submit">Submit</button>
                            </form>
                        </div>
                
                        <div class="review-item">
                            <h3>John Doe</h3>
                            <p>"Võ Gia Huy is an outstanding developer with an eye for detail. His work exceeded my expectations."</p>
                        </div>
                        <div class="review-item">
                            <h3>Jane Smith</h3>
                            <p>"Huy's designs are both functional and visually appealing. He truly understands user experience."</p>
                        </div>
                    </div>
                </section>
  );
}

export default Reviews;
