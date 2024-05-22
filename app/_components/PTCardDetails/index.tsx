import Link from "next/link";
import { PTCard, PTCardContainer, PTCardContent, PTImage } from "..";
import { Box, CardHeader, CardMedia, Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeStyle } from "@/app/styles";

export const PTCardDetails = () => {
    return (
        <PTCardContainer>
            <PTCard>
                <Link href="https://leetcode.com/problems/remove-element/description">
                    <CardHeader title="Leetcode - 27.Remove Element" />
                </Link>
                <PTCardContent sx={{ alignItems: 'flex-start' }}>
                    <Typography paragraph>
                        Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
                        The order of the elements may be changed.
                        Then return the number of elements in nums which are not equal to val.
                    </Typography>
                    <Typography variant="subtitle1">Example:</Typography>
                    <Typography variant="subtitle1" align="left">Input: nums = [3,2,2,3], val = 3</Typography>
                    <Typography variant="subtitle1" align="left">Output: 2, nums = [2,2,_,_]</Typography>
                    <Typography variant="subtitle1" align="left">Explanation: Your function should return k = 2, with the first two elements of nums being 2.</Typography>
                    <Box component="pre" p={2} overflow="auto" bgcolor="background.paper">
                        <SyntaxHighlighter language="javascript" style={codeStyle}>
                            {`
var removeElement = function(nums, val) {
    let k = 0;
    for(let x = 0; x < nums.length; x++){
        if(nums[x] !== val) {
            nums[k] = nums[x];
            k ++;
        }
    }
    return k;
};
                            `.trim()}
                        </SyntaxHighlighter>
                    </Box>
                    <CardMedia>
                        <PTImage src="./algorithms/leetcode/27.remove_elements.png" alt="Leetcode - 27.Remove Element"/>
                    </CardMedia>

                </PTCardContent>
            </PTCard>
        </PTCardContainer>
    );
}