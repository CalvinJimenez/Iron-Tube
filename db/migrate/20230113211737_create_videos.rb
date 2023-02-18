class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :description
      t.string :url
      t.string :thumbnail
      t.integer :view_count
      t.integer :like_number

      t.timestamps
    end
  end
end
