class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :thumbnail, :view_count, :like_number, :users_who_liked

  def users_who_liked
    self.object.users.map do |e_u|
      e_u.username
    end
  end


  # def calvin
  #   return ":)"
  # end
end
