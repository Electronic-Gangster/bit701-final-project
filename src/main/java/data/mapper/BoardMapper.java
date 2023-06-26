package data.mapper;

import data.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import java.util.Map;

@Mapper
public interface BoardMapper {
    public int getTotalCount();                                       // 게시글 총 개수
    public void insertBoard(BoardDto dto);                            // 게시글 등록
    public List<BoardDto> getPagingList(Map<String, Integer> map);    // 게시글 목록
    public void updateReadcount(int num);                             // 게시글 조회수 증가
    public BoardDto detailPage(int num);                              // 게시글 상세보기
    public void deleteBoard(int num);                                 // 게시글 삭제

}
