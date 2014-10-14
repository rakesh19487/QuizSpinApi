class WelcomeController < ApplicationController

  def save_users

          @email = params[:email]
          @initial_score = params[:initial_points]
          @user = User.create!(:email => @email, :initial_score => @initial_score)

        @user.save!


  end

  def save_users_scores

    @user_id = 1
    @email = params[:email]
    @initial_score = params[:initial_points]
    @final_score = params[:current_score]
    @user = User.find_by(initial_score:@initial_score)
    @user.update(:final_score => @final_score)
    # @comment_data = CommentData.create!(:user_id => @user_id, :suspect_id => @suspect_id, :case_id => @case)
    @user.save!
  end
end
