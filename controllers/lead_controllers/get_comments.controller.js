/*

comments table{
    comment_id:
    lead_id:
    instructor_id:
    parent_comment_id: ""
    created_at:
    updated_at:
}

10 comment, parent_comment_id = "";
1st comment_id: "xyz2";




parentcomment -> child comment

-- LOGIC

map get_comments(parent_comment_id){
    var val = get comment with parent_comment_id;

    if val == 0 return map;

    prev_comment = comment with parent_comment_id;
    comments = comments with parent_comment_id;
    map[prev_comment] = comments
    
    for comment in each comments:
        get_comments(comment_id);
}

*/