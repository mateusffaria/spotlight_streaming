require 'test_helper'

class Api::V1::ArtistsControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get api_v1_artists_home_url
    assert_response :success
  end

end
