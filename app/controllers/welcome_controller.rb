class WelcomeController < ApplicationController

  def save_users
          @final_score =params[:final_score]
          @email = params[:email]
          @initial_score = params[:initial_points]
          @user = User.create!(:email => @email, :initial_score => @initial_score,:final_score => @final_score )
          @user.save!
  end

  def save_users_scores

    @email = params[:email]
    @initial_score = params[:initial_points]
    @final_score = params[:current_score]
    @user = User.find_by(email:@email)
    @user.update(:final_score => @final_score)
    @user.save!
  end

  def get_leaderBoard_data       # for variable suspectReactions
    respond_to do |format|
      format.js do
       @leaderBoard = User.all.sort_by { |a| a.final_score}
       render :json=>@leaderBoard.reverse!, :callback => params[:callback]
       # render :json=>@leaderBoard.reverse!
       # return
      end
      end
  end

  def check_user_present
    @email = params[:email]
    @user = User.find_by(email:@email)

    if @user.nil?
      render :json=>"NULL"
      return
    else
      render :json=>@user.final_score
      return

    end

  end
end
