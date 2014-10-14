class AddScoresToUsers < ActiveRecord::Migration
  def change
    add_column :users, :initial_score, :integer
    add_column :users, :final_score, :integer
  end
end
